import {
  getCharacterByUrl,
  getCharacterInfo,
} from "@/features/characters/details/api/fetchDetailCharacters";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { CharacterApiResponse, CharacterInfrormation } from "./types";
import { fetchCharacters } from "@/features/characters/list/api/fetchCharacters";

export const useResidents = (
  urls: string[]
): UseQueryResult<CharacterInfrormation[], Error> => {
  return useQuery<CharacterInfrormation[], Error>({
    queryKey: ["residents", urls.join(",")],
    queryFn: () => Promise.all(urls.map(getCharacterByUrl)),
    enabled: urls.length > 0,
  });
};

export const useCharacters = (
  page: number
): UseQueryResult<CharacterApiResponse, Error> => {
  return useQuery<CharacterApiResponse, Error>({
    queryKey: ["characters", page],
    queryFn: () => fetchCharacters(page),
  });
};

export const useCharactersDetail = (
  id: number
): UseQueryResult<CharacterInfrormation, Error> => {
  return useQuery<CharacterInfrormation, Error>({
    queryKey: ["locationDetail", id],
    queryFn: () => getCharacterInfo(id),
  });
};
