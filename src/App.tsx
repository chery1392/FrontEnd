import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import ScrollToTop from "./hooks/scrollToTop";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { UserContextProvider } from "./context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HouseDetali from "./pages/HouseDetali";
import Advertising from "./pages/Advertising";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/house-details/:id" element={<HouseDetali />} />
          <Route path="/add-ad" element={<Advertising />} />
        </Routes>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
