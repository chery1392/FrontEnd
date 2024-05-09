/* eslint-disable react/prop-types */
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../leaflet.css";
import iconUrl from "../../public/images/location.png";

export default function Map2({ lat, lng }) {
  const ZOOM_LEVEL = 20;
  const mapRef = useRef();
  const position = [lat, lng];
  const icon = L.icon({
    iconUrl: iconUrl,
    iconSize: [30, 30],
  });

  return (
    <div className="h-[50vh] w-1/2" >
      <MapContainer
        center={position}
        zoom={ZOOM_LEVEL}
        scrollWheelZoom={true}
        style={{ height: `100%` }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>محل تقریبی کاربر</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
