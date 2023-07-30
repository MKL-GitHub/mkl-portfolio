export interface Visiter {
  id: string;
  location?: {
    latitude: string,
    longitude: string,
  };
  platformData: string[];
}

//Browser and Device Information: