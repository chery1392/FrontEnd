import AdvertisingSection from "../components/Advertising/AdvertisingSection";

const Advertising: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-slate-200 md:p-24">
      <div className="w-full min-h-screen md:min-h-full md:h-full md:max-h-[600px] bg-cover bg-ad-background bg-center md:bg-none bg-white md:rounded-2xl flex justify-center items-stretch overflow-auto">
        <div className="w-1/3 hidden lg:block">
          <img
            role="presentation"
            onError={(e) => {
              e.currentTarget.src = "/photos/default.webp";
            }}
            className="h-full w-full object-cover md:rounded-r-2xl "
            src="/photos/advertising-background.webp"
            alt=""
          />
        </div>
        <div className="flex-grow p-5 md:w-2/3 h-full ">
          <AdvertisingSection />
        </div>
      </div>
    </div>
  );
};

export default Advertising;
