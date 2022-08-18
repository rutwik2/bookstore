import { HiShoppingCart, HiUsers } from "react-icons/hi";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const useLogin = useSelector((state) => state.userLogin);
  const { userInfo } = useLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="flex justify-between items-center bg-sky-500 fixed top-0 z-999 w-full">
      <a href="/"><header className="pl-8 text-3xl py-5 items-center font-semibold">
        Book<span className="text-red-600">Store</span>
      </header></a>
      <div className="flex py-5 pr-8 items-center">
        <a href="#" className="flex text-xl pr-8 text-white font-bold">
          <HiShoppingCart style={{ fontSize: "30px" }} />
          Cart
        </a>
        {userInfo ? (
          <div>
            <button className="p-2 text-white font-bold  text-xl">{userInfo.name}</button>
            <button className="p-2 text-white font-bold  text-xl">Profile</button>
            <button onClick={logoutHandler} className="p-2 text-white font-bold  text-xl">Logout</button>
          </div>
        ) : (
          <a href="/login" className="flex text-xl pr-8 text-white font-bold">
            <HiUsers style={{ fontSize: "30px" }} />
            Login
          </a>
        )}
      </div>
    </div>
  );
};
export default Header;
