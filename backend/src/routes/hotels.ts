import express, { Request, Response } from "express";
import Hotel from "../models/hotel";
import { HotelSearchResponse } from "../types/search";

const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
  try {
    //for pagination

    //number of hotels per page
    const pageSize = 5;
    // parsing the page number to int after converting it to string because of the types that comes with req.body or we simply start with one if the user didn't click
    const pageNumber = parseInt(
      req.params.page ? req.params.page.toString() : "1"
    );

    //number of hotels we're going to skip
    const skip = (pageNumber - 1) * pageSize;

    const hotels = await Hotel.find().skip(skip).limit(5);

    const total = await Hotel.countDocuments();
    const reponse: HotelSearchResponse = {
      data: hotels,
      pagination: {
        total,
        pageNumber,
        numberOfPages: Math.ceil(total / pageSize),
      },
    };

    res.json(reponse);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
