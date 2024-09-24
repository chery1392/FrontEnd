import Spinner from "../../ui/Loading";
import FetchHouseInformation from "./FetchHouseInformation";
import HousePhoto from "./HousePhoto";
import useHouseById from "./useHouseById";

const FetchHouseById: React.FC = () => {
  const { isLoading, item } = useHouseById();
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="space-y-14">
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full h-full">
        <FetchHouseInformation fetchHouse={item} />
        <HousePhoto />
      </div>
    </div>
  );
};

export default FetchHouseById;
