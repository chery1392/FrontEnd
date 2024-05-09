import { useState } from "react";
import { getHomes } from "../services/homes";
import { useQuery } from "@tanstack/react-query";
import Loader from "../modules/Loader";
import villa from "../../public/images/villa.jpg"
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["homes"],
    queryFn: getHomes,
  });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) return <Loader />;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.data?.slice(startIndex, endIndex);

  const pageCount = Math.ceil(data?.data?.length / itemsPerPage);

  return (
    <div>
      <div className="flex flex-wrap justify-between mt-5 w-full h-[100vh]">
        {currentItems.map((post) => (
            <Link key={post?.id} to={`/details/${post?.id}`}>
            <div className="w-[270px] flex flex-col border-2 border-gray-300 p-4 m-3 rounded-md">
              <img src={villa} alt="villa" className="w-full h-[200px] object-cover rounded-md mb-3"/>
              <p className="text-sm">{post?.form?.address}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        {Array.from({ length: pageCount }).map((_, index) => (
            <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`inline-block  text-gray-800 font-semibold px-3 py-2 rounded-lg 
              ${currentPage === index ? "bg-gray-400 text-white" : "bg-gray-200"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
