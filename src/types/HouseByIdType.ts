export interface DeleteModalType {
  setDeleteModalOpen: (open: boolean) => void;
  deleteModalOpen: boolean;
}

export interface EditModalType {
  setEditModalOpen: (open: boolean) => void;
  editModalOpen: boolean;
}

export interface FechHousePriceType {
  city?: string;
  price: number;
}

export interface FetchHouseDescriptionType {
  description?: string;
}

export interface FetchHouseInformationType {
  fetchHouse: any;
}

export interface FetchHousrHeaderType {
  city: string;
  titleGroup: string;
  title: string;
}

export interface HouseCompleteFechersType {
  parking?: number;
  wc?: number;
  warhouse?: number;
  wctype?: string;
  elavator?: number;
  collingsystem?: string;
  floorMaterial?: string;
  heatingSystem?: string;
}

export interface HouseFeachersType {
  floor: number;
  rooms: number;
}

export interface EditHouseFormData {
  title: string;
  description: string;
  mobile_number: number;
  city: string;
  address: string;
  price: number;
}
