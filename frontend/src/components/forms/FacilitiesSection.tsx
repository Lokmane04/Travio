import { useFormContext } from "react-hook-form";
import { hotelFacilities } from "../../config/hotelOptions-config";
import { HotelFormData } from "./ManageHotelForm";
const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 mt-5">Facilities</h2>
      <div className="grid grid-cols-5 gap-3 ml-5">
        {hotelFacilities.map((facility) => (
          <label className="text-gray-700" key={facility}>
            <input
              className="rounded-md mr-2"
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "Select at least one facility";
                  }
                },
              })}
            />
            {facility}
          </label>
        ))}
      </div>
      {errors.facilities && (
        <p className="text-sm font-bold text-red-500">
          {errors.facilities.message}
        </p>
      )}
    </div>
  );
};

export default FacilitiesSection;
