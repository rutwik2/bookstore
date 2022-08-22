import { HiShoppingCart, HiUsers,HiUserCircle } from "react-icons/hi";
import {MdArrowDropDown} from 'react-icons/md'
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show,setShow]=useState(false)

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
          <div className="relative inline-block text-left">
          <div className="flex">
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
             onClick={()=>setShow(true)}>
              <HiUserCircle style={{ fontSize: "30px" }}></HiUserCircle><h1 className="pt-1 font-xl pl-1">{userInfo.name}</h1>
             
            
              
            </button>
            <button onClick={()=>setShow(false)}> <MdArrowDropDown style={{ fontSize: "30px" }}></MdArrowDropDown></button>
          </div>
        
          {show &&<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              
              <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Profile</a>
              <button onClick={logoutHandler} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Logout</button>
              
              
            </div>
          </div>}
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
