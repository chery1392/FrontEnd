import Navbar from "../ui/Navbar";

const Home: React.FC = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  console.log("User data:", user);
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar />
      <div className="w-full min-h-screen space-y-14"></div>
    </div>
  );
};

export default Home;
