import { locationsImages } from "../config/constants";

export const getRandomImages = () => {
  const randomIndex = Math.floor(Math.random() * locationsImages.length);
  return locationsImages[randomIndex];
};
