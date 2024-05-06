/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { Icon } from "leaflet";
import iconUrl from "../../public/images/location.png";

export default function Map({ setForm, form }) {
  const ZOOM_LEVEL = 20;
  const mapRef = useRef();
  const position = [35.7292667, 51.360267];
  const icon = new Icon({
    iconUrl: iconUrl,
    iconSize: [30, 30],
  });

  return (
    <MapContainer
      center={position}
      zoom={ZOOM_LEVEL}
      scrollWheelZoom={true}
      style={{ height: `100%` }}
      ref={mapRef}
    >
      <MapManager setForm={setForm} form={form} icon={icon} />
    </MapContainer>
  );
}

function MapManager({ setForm, form, icon }) {
  const handleLocationChange = (e) => {
    setForm({ ...form, location: e.latlng });
  };
  //console.log(form);

  useMapEvents({
    click(e) {
      if (!form.location) {
        handleLocationChange(e);
      }
    },
  });

  return (
    <>
      <TileLayer
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {form.location && (
        <Marker position={form.location} icon={icon}>
          <Popup>موقعیت انتخاب شده</Popup>
        </Marker>
      )}
    </>
  );
}
