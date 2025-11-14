"use client";

import {
  Box,
  CircularProgress,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import { useCharactersDetail } from "@/entities/character/model/query";
import Link from "next/link";
import { CharacterInfoCard } from "@/entities/character/ui/CharacterInfoCard";
import { useEpisodesByUrl } from "@/entities/episode/model/query";
import { format } from "date-fns";

type CharacterDetailInfoBlockProps = {
  id: number;
};

export const CharacterDetailInfoBlock = ({
  id,
}: CharacterDetailInfoBlockProps) => {
  const { data, isLoading, isError, error } = useCharactersDetail(id);
  const url = data?.episode ?? [];
  const { data: episodes } = useEpisodesByUrl(url);

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
          mt: { xs: 4, sm: 6, lg: 10 },
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CharacterInfoCard character={data} />
      </Box>

      <Box
        sx={{
          mt: { xs: 2, lg: 10 },
          width: { xs: "100%", sm: "90%", lg: "auto" },
          maxWidth: { xs: "100%", sm: "600px", lg: "none" },
        }}
      >
        <Typography
          sx={{
            ml: { xs: 0, lg: 0.7 },
            fontSize: { xs: 20, sm: 22, lg: 24 },
            textAlign: { xs: "center", lg: "left" },
            mb: { xs: 2, lg: 0 },
          }}
        >
          Эпизоды
        </Typography>
        <Stack sx={{ mt: 2 }} spacing={2}>
          {episodes?.map((episode) => (
            <Link
              key={episode.id}
              style={{ textDecoration: "none", color: "black" }}
              href={`/episodes/${episode.id}`}
            >
              <Paper>
                <Box>
                  <Box sx={{ px: { xs: 2, sm: 1 }, py: { xs: 1, sm: 0.5 } }}>
                    <Typography
                      variant="subtitle1"
                      fontWeight="medium"
                      sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                    >
                      {episode.name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }}>
                      {format(episode.created, "dd.MM.yyyy")}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
