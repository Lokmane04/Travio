import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
const SignOutbutton = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");
      showToast({
        type: "SUCCESS",
        message: "Thanks for visiting! Hope to see you back soon!",
        icon: "👋",
      });
    },
    onError: (err: Error) => {
      showToast({
        type: "ERROR",
        message: err.message,
      });
    },
  });
  const handleClick = () => {
    mutation.mutate();
  };
  return (
    <button
      className="text-blue-600 px-3 font-bold hover:bg-gray-100 bg-white"
      onClick={() => {
        handleClick();
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutbutton;
