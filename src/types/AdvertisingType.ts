export interface MapModalType {
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

export interface FormData {
  title: string;
  description: string;
  mobile_number: string;
  city: string;
  address: string;
  price: number;
  rooms: number;
}