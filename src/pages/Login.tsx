import { useState } from "react";
import http from "../services/http"; // Your axios instance

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "", // required
    password: "", // required
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await http.post("http://localhost:3000/login", formData);

      // Assuming the token is returned in response.data.accessToken
      const { accessToken, user } = response.data;

      // Store the JWT token in localStorage for future use
      localStorage.setItem("token", accessToken);

      // Optionally store user data if you need access to it frequently
      localStorage.setItem("user", JSON.stringify(user));

    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          required
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
