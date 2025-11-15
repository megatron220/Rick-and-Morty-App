import { LocationInformation } from "@/entities/location/model/type";
import { BASE_API__LOCATIONS_URL } from "@/shared/config/constants";

export const getLocationDetailInfo = async (
  id: number
): Promise<LocationInformation> => {
  const response = await fetch(`${BASE_API__LOCATIONS_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить информацию о локации");
  }

  return response.json();
};
