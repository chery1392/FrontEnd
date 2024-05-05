import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { checkUsernameExistence, login } from "../services/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      toast.error("وارد کردن شماره همراه الزامی میباشد!");
      return;
    } else if (!/^09\d{9}$/.test(phoneNumber)) {
      toast.error("شماره همراه باید با 09 شروع شود و 11 رقم باشد!");
      return;
    }

    if (username.trim().length === 0) {
      toast.error("نام کاربری را وارد کنید");
      return;
    }
    if (password.trim().length === 0) {
      toast.error("رمزعبور را وارد کنید");
      return;
    }

    const { response, error } = await login(phoneNumber, username, password);
    if (response && response.status === 201) {
      console.log(response);
      toast.success("ثبت نام با موفقیت انجام شد");
      navigate("/home-page");
      return;
    }
    if (error) {
      console.log(error);
      return;
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" flex items-center justify-center h-screen  bg-gradient">
      <form
        onSubmit={submitHandler}
        action=""
        className="container mx-auto flex flex-col bg-gradient-to-r from-red-300 to-yellow-300   m-auto px-4 md:px-8 lg:px-12 xl:px-15 py-7  max-w-[450px] rounded-3xl  text-gray-700  shadow-2xl "
      >
        <h1 className="text-[23px] text-center mb-2 font-bold">سامانه مسکن</h1>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full py-2 px-4 border-0 rounded-lg my-4 outline-none focus:outline-none focus:ring-2 focus:ring-[#e86e0080]"
          placeholder="شماره همراه...."
        />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full py-2 px-4 border-0 rounded-lg my-4 outline-none focus:outline-none focus:ring-2 focus:ring-[#e86e0080]"
          placeholder=" نام کاربری...."
        />
        <div>
          <div className="relative  ">
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute top-0 left-0 h-full px-3 flex items-center text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 border-0 rounded-lg my-4 outline-none focus:outline-none focus:ring-2 focus:ring-[#e86e0080]"
              placeholder=" رمز ورود...."
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E86E00]  text-white py-2 rounded-md transition duration-300  text-base border-0 outline-0 p-1 cursor-pointer mt-4"
        >
          ورود
        </button>
      </form>
    </div>
  );
};

export default Register;
