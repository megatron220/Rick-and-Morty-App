"use client";

import { LocationInfoCard } from "@/entities/location/ui/LocationInfoCard";
import { useLocationDetail } from "@/entities/location/model/query";
import {
  Box,
  CircularProgress,
  Typography,
  Divider,
  Stack,
  Paper,
} from "@mui/material";
import {
  useCharactersDetail,
  useResidents,
} from "@/entities/character/model/query";
import { CharacterCard } from "@/entities/character/ui/CharacterCard";
import Link from "next/link";
import { CharacterInfoCard } from "@/entities/character/ui/CharacterInfoCard";
import {
  useEpisodeDetail,
  useEpisodesByUrl,
} from "@/entities/episode/model/query";
import { format, parseISO } from "date-fns";
import { EpisodeInfoCard } from "@/entities/episode/ui/EpisodeInfoCard";

type EpisodelInfoBlockProps = {
  id: number;
};

export const EpisodeDetailInfoBlock = ({ id }: EpisodelInfoBlockProps) => {
  const { data, isLoading, isError, error } = useEpisodeDetail(id);
  const url = data?.characters ?? [];

  const { data: characters } = useResidents(url);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography color="error" align="center" mt={10}>
        {(error as Error).message}
      </Typography>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: { xs: "center", lg: "space-evenly" },
        alignItems: { xs: "center", lg: "flex-start" },
        ml: { xs: 0, md: 2, lg: 10 },
        mr: { xs: 0, md: 2, lg: 0 },
        gap: { xs: 3, sm: 4, lg: 15 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          mt: { xs: 4, sm: 6, lg: 16 },
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <EpisodeInfoCard episode={data} />
      </Box>

      <Box sx={{ width: { xs: "100%", lg: "auto" } }}>
        <Typography
          sx={{
            mt: { xs: 2, lg: 12 },
            fontSize: { xs: 18, sm: 20 },
            textAlign: { xs: "center", lg: "left" },
            mb: { xs: 2, lg: 0 },
          }}
        >
          Персонажи:
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              sm: "repeat(3, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
              lg: "repeat(5, minmax(0, 1fr))",
            },
            gap: { xs: 2, sm: 3 },
            justifyItems: "center",
          }}
        >
          {characters?.map((character) => (
            <Link
              style={{ textDecoration: "none" }}
              key={character.id}
              href={`/characters/${character.id}`}
            >
              <CharacterCard
                name={character.name}
                image={character.image}
                height={180}
                widht={180}
              />
            </Link>
          ))}
        </Box>
      </Box>

      {/* <Box sx={{ mt: 10 }}>
        <Typography sx={{ ml: 0.7, fontSize: 24 }}>Эпизоды</Typography>
        <Stack sx={{ mt: 2 }} spacing={2}>
          {episodes?.map((episode) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href={`/episodes/${episode.id}`}
            >
              <Paper>
                <Box key={episode.id}>
                  <Box sx={{ px: 1 }}>
                    <Typography variant="subtitle1" fontWeight="medium">
                      {episode.name}
                    </Typography>
                    <Typography>
                      {format(episode.created, "dd.MM.yyyy")}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Link>
          ))}
        </Stack>
      </Box> */}
    </Box>
  );
};
