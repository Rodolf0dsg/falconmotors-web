export interface VehicleResponse {
  total:  number;
  data:   Vehicle[];
  brands: string[];
  types:  string[];
  pages:  number;
}

export interface VehicleResponsePartial {
  data:   Vehicle[];
  pages:  number;
}

export interface VehicleFiltersResponse {
  brands: string[];
  types: string[];
}

export interface Vehicle {
  _id:          string;
  brand:        string;
  vehicleModel: string;
  year:         number;
  mileage:      number;
  price:        number;
  transmission: string;
  sold:         boolean;
  used:         boolean;
  horsePower:   number;
  type:         string;
  motor:        string;
  typeOfOil:    string;
  colors:       Color[];
  features:     string[];
  createdAt:    Date;
  updatedAt:    Date;
}

export interface Color {
  name:   string;
  code:   string;
  images: Image[];
}

export interface Image {
  url: string;
  alt: string;
}