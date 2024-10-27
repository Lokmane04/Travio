import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutbutton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-white text-3xl font-bold tracking-tight">
          <Link to={"/"}>Travio</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to={"/my-bookings"}
              >
                My bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to={"/my-hotels"}
              >
                My hotels
              </Link>
              <SignOutbutton />
            </>
          ) : (
            <Link
              to={"/sign-in"}
              className="flex items-center hover:bg-blue-500 px-3 font-bold bg-gray-100 rounded-sm"
            >
              Sign in
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
