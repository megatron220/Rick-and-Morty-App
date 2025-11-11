import { LocationApiResponse } from "@/entities/location/model/type";
import { BASE_API__LOCATIONS_URL } from "@/shared/config/constants";

export const getLocationsInfo = async (
  page: number
): Promise<LocationApiResponse> => {
  const response = await fetch(`${BASE_API__LOCATIONS_URL}/?page=${page}`, {
    next: { revalidate: 3600 },
  });
  return response.json();
};
