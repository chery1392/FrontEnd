import toast from "react-hot-toast";
import http from "./http";
interface FormDataType {
  email: string;
  password: string;
  username: string;
}

interface LoginDataType {
  email: string;
  password: string;
}

export async function signupApi(formData: FormDataType) {
  try {
    const response = await http.post("users", formData);
    // Assuming the token is returned in response.data.accessToken
    const { accessToken, user } = response.data;

    // Store the JWT token in localStorage for future use
    localStorage.setItem("token", accessToken);

    // Optionally store user data if you need access to it frequently
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("ثبت نام انجام شد");
  } catch (error) {
    console.error("Error during signup:", error);
    toast.error("مشکلی به وجود آمد");
  }
}

export async function loginApi(formData: LoginDataType) {
  try {
    const response = await http.post("login", formData);

    // Assuming the token is returned in response.data.accessToken
    const { accessToken, user } = response.data;

    // Store the JWT token in localStorage for future use
    localStorage.setItem("token", accessToken);

    // Optionally store user data if you need access to it frequently
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("ورود انجام شد");
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("مشکلی به وجود آمد");
  }
}
