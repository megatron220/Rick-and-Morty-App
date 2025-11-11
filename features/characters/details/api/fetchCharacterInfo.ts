import { CharacterInfrormation } from "@/entities/character/model/types";
import { BASE_API__CHARACTERS_URL } from "@/shared/config/constants";

export const getCharacterInfo = async (
  id: number
): Promise<CharacterInfrormation> => {
  const response = await fetch(`${BASE_API__CHARACTERS_URL}/${id}`, {
    next: { revalidate: 3600 },
  });
  return response.json();
};
