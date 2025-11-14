import { CharacterInfrormation } from "@/entities/character/model/types";
import { BASE_API__CHARACTERS_URL } from "@/shared/config/constants";

export const getCharacterInfo = async (id: number) => {
  const response = await fetch(`${BASE_API__CHARACTERS_URL}/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить информацию о персонаже");
  }

  return response.json();
};

export const getCharacterByUrl = async (
  url: string
): Promise<CharacterInfrormation> => {
  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить информацию о персонаже");
  }

  return response.json();
};
