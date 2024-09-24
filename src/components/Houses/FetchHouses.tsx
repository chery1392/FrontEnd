import HouseCard from "../../ui/HouseCard";
import Skeleton from "../../ui/Skeleton";
import useHouse from "./useHouse";

const FetchHouses: React.FC = () => {
  const { items, isLoading } = useHouse();
  return (
    <div className="space-y-5 w-full md:w-1/2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {items.length == 0 ? (
          <p className="font-semibold w-full">محصولی برای نمایش وجود ندارد</p>
        ) : (
          !isLoading &&
          items.map((house: any) => <HouseCard key={house.id} house={house} />)
        )}
      </div>
      <div className="flex gap-6 flex-wrap sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
        {isLoading && <Skeleton cards={2} />}
      </div>
    </div>
  );
};

export default FetchHouses;
