import { LocationInformation } from "@/entities/location/model/type";
import { BASE_API__LOCATIONS_URL } from "@/shared/config/constants";

export const getLocationDetailInfo = async (
  id: number
): Promise<LocationInformation> => {
  const response = await fetch(`${BASE_API__LOCATIONS_URL}/${id}`, {
    next: { revalidate: 3600 },
  });
  return response.json();
};
