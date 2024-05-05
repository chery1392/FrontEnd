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

const checkUsernameExistence = async () => {
  try {
    const response = await api.get("users");
    return { response };
  } catch (error) {
    return { error };
  }
};

export { login, checkUsernameExistence };
