import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../api-client";
import { useState } from "react";
import SearchResultsCard from "../components/search/SearchCardResults";
import Pagination from "../components/search/Pagination";
import { HotelType } from "../../../backend/src/types/hotel";
const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
    page: page.toString(),
  };
  console.log(searchParams.page);

  const { data: hotelData } = useQuery(["searchHotels", searchParams], () =>
    apiClient.searchHotels(searchParams)
  );
  console.log(
    hotelData?.data.map((star: HotelType) => {
      return typeof star.starRating;
    })
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {hotelData?.pagination.total} Hotels found
            {search.destination ? ` in ${search.destination}` : ""}
          </span>
        </div>
        {hotelData?.data.map((hotel, i) => (
          <SearchResultsCard key={i} hotel={hotel} />
        ))}
        <div>
          <Pagination
            page={hotelData?.pagination.page || 1}
            pages={hotelData?.pagination.pages || 1}
            onPageChange={(pageNumber) => setPage(pageNumber)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;