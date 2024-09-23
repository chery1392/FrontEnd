import { Link } from "react-router-dom";
import { toPersianNumbersWithComma } from "../utils/frormatNumber";

interface HouseCard {
  house: {
    id: string;
    title?: string;
    city?: string;
    price: number;
  };
}

const HouseCard: React.FC<HouseCard> = ({ house }) => {
  return (
    <div className="space-y-5 border rounded-lg h-fit" key={house.id}>
      <Link to={`/house-details/${house.id}`}>
        <div className="relative w-full h-32 bg-cover rounded-lg">
          <img
            role="presentation"
            onError={(e) => {
              e.currentTarget.src = "/photos/default.webp";
            }}
            className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
            src="/photos/house-fetch.jpg"
            alt=""
          />
        </div>
      </Link>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between items-center text-gray-350 text-sm font-medium">
          <h4>{house.title}</h4>
        </div>
        <p className="font-medium text-gray-500">شهر&nbsp;{house.city}</p>
        <p className="font-medium text-sm">
          قیمت&nbsp;{toPersianNumbersWithComma(house.price)}&nbsp;تومان
        </p>
        <Link
          to={`/house-details/${house.id}`}
          className="text-white bg-primary w-full p-2 rounded-md flex justify-center font-medium"
        >
          مشخصات کامل
        </Link>
      </div>
    </div>
  );
};

export default HouseCard;
