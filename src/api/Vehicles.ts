import { Vehicle, VehicleFiltersResponse, VehicleResponse, VehicleResponsePartial } from '../Types/VehicleResponse';

interface VehicleQuery {
  limit?:  number;
  offset?: number;
  brand?:  string;
  type?:   string;
}

export const getVehicles = async ( query: VehicleQuery = {} ): Promise<VehicleResponsePartial> => {

  const params = new URLSearchParams();

  if (query.limit)  params.append("limit", query.limit.toString());
  if (query.offset) params.append("offset", query.offset.toString());
  if (query.brand)  params.append("brand", query.brand);
  if (query.type)   params.append("type", query.type);


  const url = `${process.env.NEXT_PUBLIC_API_URL}/vehicles?${params.toString()}`;

  const res = await fetch( url );
  
  const { data, pages }: VehicleResponse = await res.json();

  return {
    data, pages
  }

};

export const getVehicleBrandsAndTypes = async (): Promise<VehicleFiltersResponse> => {

  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles`);

  const { brands, types }: VehicleResponse = await data.json();

  return { brands, types };

}

export const getVehicle = async ( id: string ): Promise<Vehicle> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${ id }`);
  const { vehicle } = await response.json();
  return vehicle;
};