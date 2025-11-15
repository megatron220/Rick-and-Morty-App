import { EpisodeApiResponse } from "@/entities/episode/model/type";
import { BASE_API__EPISODES_URL } from "@/shared/config/constants";

export const getEpisodes = async (
  page: number
): Promise<EpisodeApiResponse> => {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));

  const response = await fetch(`${BASE_API__EPISODES_URL}?${params}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить эпизоды");
  }

  return response.json();
};
