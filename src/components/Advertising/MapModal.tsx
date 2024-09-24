import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import Modal from "../../ui/Modal";

interface MapModalType {
  setMapModalOpen: (open: boolean) => void;
  mapModalOpen: boolean;
  location: {
    lat: number;
    lng: number;
  };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
}
const MapModal: React.FC<MapModalType> = ({
  mapModalOpen,
  setMapModalOpen,
  location,
  setLocation,
}) => {
  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setLocation({ lat, lng });
      },
    });
    return null;
  };

  return (
    <Modal
      logo="انتخاب موقعیت آگهی"
      onClose={() => setMapModalOpen(false)}
      open={mapModalOpen}
      width="w-full md:w-2/3 lg:w-1/2 "
    >
      <div className="flex items-center justify-center bg-white w-full p-6">
        <div className="flex gap-5 justify-center items-center font-bold text-lg w-full h-full">
          <div className="w-full">
            <MapContainer
              center={[location.lat, location.lng]}
              zoom={13}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MapEvents />
              {location && (
                <Marker position={[location.lat, location.lng]}></Marker>
              )}
            </MapContainer>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MapModal;
