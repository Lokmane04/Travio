import { useMutation } from "react-query";
import ManageHotelForm from "../components/forms/ManageHotelForm";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api-client";
const AddHotel = () => {
  const { showToast } = useAppContext();
  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ type: "SUCCESS", message: "Hotel saved successfully" });
    },
    onError: () => {
      showToast({
        type: "ERROR",
        message: "Error occured while saving the hotel",
      });
    },
  });
  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  };
  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;
};

export default AddHotel;
