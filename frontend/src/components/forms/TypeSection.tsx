import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotelOptions-config";
import { HotelFormData } from "./ManageHotelForm";
const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const typeWatch = watch("type");
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 mt-5">
        Type <span className="text-sm font-normal">(Choose one)</span>
      </h2>
      <div className="grid grid-cols-5 gap-2 ml-5">
        {hotelTypes.map((type) => {
          return (
            <label
              key={type}
              className={
                typeWatch === type
                  ? "cursor-pointer bg-blue-300 text-sm rounded-full px-4 py-2 font-semibold"
                  : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold"
              }
            >
              <input
                type="radio"
                value={type}
                {...register("type", { required: "This field is required" })}
                className="hidden"
              />
              <span>{type} </span>
            </label>
          );
        })}
      </div>
      {errors.type && (
        <p className="text-sm font-bold text-red-500">{errors.type.message}</p>
      )}
    </div>
  );
};

export default TypeSection;
