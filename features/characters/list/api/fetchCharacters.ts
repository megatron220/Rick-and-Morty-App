"use server";

import { CharacterApiResponse } from "@/entities/character/model/types";
import { BASE_API__CHARACTERS_URL } from "@/shared/config/constants";

const getCharactersData = async (
  page: number
): Promise<CharacterApiResponse> => {
  const responce = await fetch(`${BASE_API__CHARACTERS_URL}/?page=${page}`, {
    next: { revalidate: 3600 },
  });
  return responce.json();
};

export { getCharactersData };
