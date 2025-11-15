import { episodesImages } from "../config/constants";

export const getRandomEpisodes = () => {
  const randomIndex = Math.floor(Math.random() * episodesImages.length);
  return episodesImages[randomIndex];
};
