import {
  EpisodeApiResponse,
  EpisodeInfrormation,
} from "@/entities/episode/model/type";
import {
  getDetailEpisode,
  getEpisodeByUrl,
} from "@/features/episodes/details/api/fetchDetailEpisodes";
import { getEpisodes } from "@/features/episodes/list/api/fetchEpisodes";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useEpisodes = (
  page: number
): UseQueryResult<EpisodeApiResponse, Error> => {
  return useQuery<EpisodeApiResponse, Error>({
    queryKey: ["episodes", page],
    queryFn: () => getEpisodes(page),
  });
};

export const useEpisodeDetail = (
  id: number
): UseQueryResult<EpisodeInfrormation> => {
  return useQuery<EpisodeInfrormation>({
    queryKey: ["episodeDetail", id],
    queryFn: () => getDetailEpisode(id),
  });
};

export const useEpisodesByUrl = (
  urls: string[]
): UseQueryResult<EpisodeInfrormation[], Error> => {
  return useQuery<EpisodeInfrormation[], Error>({
    queryKey: ["episodes", urls.join(",")],
    queryFn: () => Promise.all(urls.map(getEpisodeByUrl)),
    enabled: urls.length > 0,
  });
};
