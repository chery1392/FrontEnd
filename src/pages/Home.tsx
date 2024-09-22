import Footer from "../components/Footer/Footer";
import SaghfinooMap from "../components/Houses/SaghfinooMap";
import Navbar from "../ui/Navbar";

const Home: React.FC = () => {
  return (
    <div className="max-w-[2000px] mx-auto">
      <Navbar />
      <div className="w-full min-h-screen mt-12 md:mt-[170px] px-6 md:px-14 py-10 space-y-5">
        <div className="flex gap-12">
          <SaghfinooMap />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
