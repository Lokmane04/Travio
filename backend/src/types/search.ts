import { HotelType } from "./hotel";

export type HotelSearchResponse = {
  data: HotelType[];
  pagination: {
    total: number;
    pageNumber: number;
    numberOfPages: number;
  };
};
