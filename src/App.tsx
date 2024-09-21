import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ScrollToTop from "./hooks/scrollToTop";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
