import toast from "react-hot-toast";
import api from "./../configs/api";

const login = async (phoneNumber, username, password) => {
  try {
    const response = await api.post("users", {
      phoneNumber,
      username,
      password,
    });
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
    console.log(user);
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
