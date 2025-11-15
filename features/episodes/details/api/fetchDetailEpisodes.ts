import { EpisodeInfrormation } from "@/entities/episode/model/type";
import { BASE_API__EPISODES_URL } from "@/shared/config/constants";

export const getDetailEpisode = async (id: number) => {
  const response = await fetch(`${BASE_API__EPISODES_URL}/${id}`, {
    next: { revalidate: 3600 },
  });
  return response.json();
};

export const getEpisodeByUrl = async (
  url: string
): Promise<EpisodeInfrormation> => {
  const response = await fetch(url, {
    cache: "no-cache",
  });
  return response.json();
};
