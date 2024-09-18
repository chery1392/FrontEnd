import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ScrollToTop from "./hooks/scrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
