import React from "react";
import { Link } from "react-router-dom";
import location from "../../public/images/location.svg"
import profile from "../../public/images/profile.svg"


const Header = () => {
  return (
    <header className=" flex justify-between items-center py-3 mb-5 border-b-2 border-[#a3a2a2]">
      <div className="flex items-center">
        <Link to="/">
          <img src="" alt="" className="" />
        </Link>
        <span className="flex items-center text-gray-700 h-12">
          <img src={location} alt="" />
          <p className="mr-1 text-sm">تهران</p>
        </span>
      </div>
      <div className="flex items-center ml-2">
        <Link to="/auth">
          <span className="flex items-center text-gray-700 h-12">
            <img src={profile} alt="" />
            <p className="mr-1 text-sm">پروفایل من</p>
          </span>
        </Link>
        <Link to="/dashboard" className="bg-blue-400 text-white h-10 w-20 flex items-center justify-center text-base mr-10 rounded-md transition-all duration-300 hover:bg-blue-600">
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
