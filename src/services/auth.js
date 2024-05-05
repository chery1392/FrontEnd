import toast from "react-hot-toast";
import api from "./../configs/api";
import { useNavigate } from "react-router-dom";

const login = async (username, password) => {
  try {
    const response = await api.post("users", { username, password });
    return { response };
  } catch (error) {
    return { error };
  }
};

const checkUsernameExistence = async (username, password, navigate) => {
  try {
    const response = await api.get("users");

    const userExists = response.data.some((user) => user.username === username);

    if (!userExists) {
      return toast.error(
        "کاربری با این نام کاربری وجود ندارد. لطفاً ثبت نام کنید."
      );
    }

    const user = response.data.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return toast.error("رمز عبور اشتباه است.");
    }

    toast.success("با موفقیت وارد شدین");
    navigate("/home-page");
  } catch (error) {
    return { error };
  }
};

export { login, checkUsernameExistence };
