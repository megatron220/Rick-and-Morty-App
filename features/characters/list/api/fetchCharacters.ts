import { CharacterApiResponse } from "@/entities/character/model/types";
import { BASE_API__CHARACTERS_URL } from "@/shared/config/constants";

export const fetchCharacters = async (
  page: number
): Promise<CharacterApiResponse> => {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));

  const response = await fetch(`${BASE_API__CHARACTERS_URL}?${params}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить персонажей");
  }

  return response.json();
};
