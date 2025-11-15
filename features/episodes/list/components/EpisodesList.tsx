import { CharacterCard } from "@/entities/character/ui/CharacterCard";
import { EpisodeApiResponse } from "@/entities/episode/model/type";
import { EpisodeCard } from "@/entities/episode/ui/EpisodeCard";
import { getRandomEpisodes } from "@/shared/lib/getRandomEpisodes";
import { Box } from "@mui/material";
import Link from "next/link";

type episodesListProps = {
  episodes: EpisodeApiResponse["results"];
};

export const EpisodesList = ({ episodes }: episodesListProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: "10px", sm: "15px" },
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 2, sm: 3 },
          justifyItems: "center",
        }}
      >
        {episodes.map((episode) => (
          <Link
            style={{ textDecoration: "none" }}
            key={episode.id}
            href={`/episodes/${episode.id}`}
          >
            <EpisodeCard name={episode.name} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};
