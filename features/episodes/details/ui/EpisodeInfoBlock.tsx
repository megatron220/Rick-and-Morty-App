import { EpisodeInfrormation } from "@/entities/episode/model/type";
import { EpisodeInfoCard } from "@/entities/episode/ui/EpisodeInfoCard";
import { Box } from "@mui/material";

type EpisodeInfoBlockProps = {
  episodeInfo: EpisodeInfrormation;
};

export const EpisodeInfoBlock = ({ episodeInfo }: EpisodeInfoBlockProps) => {
  return (
    <Box>
      <EpisodeInfoCard episode={episodeInfo} />;
    </Box>
  );
};
