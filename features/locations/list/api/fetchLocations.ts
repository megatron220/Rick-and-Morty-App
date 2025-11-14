import {
  LocationApiResponse,
  LocationInformation,
} from "@/entities/location/model/type";
import { BASE_API__LOCATIONS_URL } from "@/shared/config/constants";

export const getLocationsInfo = async (
  page: number
): Promise<LocationApiResponse> => {
  const response = await fetch(`${BASE_API__LOCATIONS_URL}/?page=${page}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить локации");
  }

  return response.json();
};

export const fetchCharactersByUrl = async (
  url: string
): Promise<LocationInformation> => {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить персонажей локации");
  }

  return response.json();
};
