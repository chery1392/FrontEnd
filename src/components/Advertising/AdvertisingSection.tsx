import AdContent from "./AdContent";
import AdHeader from "./AdHeader";

const AdvertisingSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center h-full md:px-16 ">
      <AdHeader />
      <AdContent />
    </div>
  );
};

export default AdvertisingSection;
