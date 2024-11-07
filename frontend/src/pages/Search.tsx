import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/SearchContext";
import * as apiClient from "../api-client";
import React, { useState } from "react";
import SearchResultsCard from "../components/search/SearchCardResults";
import Pagination from "../components/search/Pagination";
import StarRatingFilter from "../components/filters/StarRating";
import HotelTypesFilter from "../components/filters/HotelTypesFilter";
import FacilitiesFilter from "../components/filters/FacilitiesFilter";
import PriceFilter from "../components/filters/PriceFilter";
const Search = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const [sortOption, setSortOption] = useState<string>("");
  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
    page: page.toString(),
    stars: selectedStars,
    types: selectedHotelTypes,
    maxPrice: selectedPrice?.toString(),
  };

  const { data: hotelData } = useQuery(["searchHotels", searchParams], () =>
    apiClient.searchHotels(searchParams)
  );
  const handleStarsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const starRating = e.target.value;
    setSelectedStars((prev) =>
      e.target.checked
        ? [...prev, starRating]
        : prev.filter((star) => star !== starRating)
    );
  };
  const handleTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value;
    setSelectedHotelTypes((prev) =>
      e.target.checked
        ? [...prev, type]
        : prev.filter((hotel) => hotel !== type)
    );
  };
  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const facility = event.target.value;

    setSelectedFacilities((prevFacilities) =>
      event.target.checked
        ? [...prevFacilities, facility]
        : prevFacilities.filter((prevFacility) => prevFacility !== facility)
    );
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
          <StarRatingFilter
            selectedStars={selectedStars}
            onChange={handleStarsChange}
          />
          <HotelTypesFilter
            selectedHotelTypes={selectedHotelTypes}
            onChange={handleTypesChange}
          />
          <FacilitiesFilter
            selectedFacilities={selectedFacilities}
            onChange={handleFacilityChange}
          />
          <PriceFilter
            selectedPrice={selectedPrice}
            onChange={(value?: number) => setSelectedPrice(value)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {hotelData?.pagination.total !== 0
              ? `${hotelData?.pagination.total} `
              : "No "}
            Hotels found
            {search.destination ? ` in ${search.destination}` : ""}
          </span>
          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Sort By</option>

            <option value="starRating">Star Rating</option>

            {/* Sort by Price */}
            <option value="pricePerNightAsc">
              &#8593; Price Per Night (Low to High)
            </option>
            <option value="pricePerNightDesc">
              &#8595; Price Per Night (High to Low)
            </option>
          </select>
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
