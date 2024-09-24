const HousePhoto: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 space-y-14">
      <div className="relative w-full h-[340px] bg-cover rounded-lg">
        <img
          role="presentation"
          onError={(e) => {
            e.currentTarget.src = "/photos/default.webp";
          }}
          className="absolute inset-0 w-full h-[340px] object-cover rounded-lg"
          src="/photos/house-fetch.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HousePhoto;
