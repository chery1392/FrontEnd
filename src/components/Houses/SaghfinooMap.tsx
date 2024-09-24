import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import useHouse from "./useHouse";
import { useNavigate } from "react-router-dom";

interface HouseItem {
  id: string;
  location: LatLngTuple;
}

const SaghfinooMap: React.FC = () => {
  const { items, isLoading } = useHouse();
  const navigate = useNavigate();

  const defaultCenter: LatLngTuple = [35.6892, 51.389];

  return (
    <div className="w-1/2 hidden md:block z-0" style={{ height: "500px" }}>
      {!isLoading && (
        <MapContainer
          center={defaultCenter}
          zoom={13}
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {items.map((item: HouseItem) => (
            <Marker
              eventHandlers={{
                click: () => {
                  navigate(`/house-details/${item.id}`);
                },
              }}
              position={item.location}
              key={item.id}
            />
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default SaghfinooMap;
