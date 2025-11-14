"use client";

import { LocationInfoCard } from "@/entities/location/ui/LocationInfoCard";
import { useLocationDetail } from "@/entities/location/model/query";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useResidents } from "@/entities/character/model/query";
import { CharacterCard } from "@/entities/character/ui/CharacterCard";
import Link from "next/link";

type LocationDetailInfoBlockProps = {
  id: number;
};

export const LocationDetailInfoBlock = ({
  id,
}: LocationDetailInfoBlockProps) => {
  const { data, isLoading, isError, error } = useLocationDetail(id);
  const residentsUrls = data?.residents ?? [];
  const {
    data: residents,
    isLoading: isLoadingResidents,
    isError: isErrorResidents,
    error: residentsError,
  } = useResidents(residentsUrls);

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
        ml: { xs: 0, md: 2, lg: 10 },
        mr: { xs: 0, md: 2, lg: 0 },
        gap: { xs: 3, sm: 4, lg: 15 },
        px: { xs: 2, sm: 3, md: 4 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mt: { xs: 4, sm: 6, lg: 11 },
          width: { xs: "100%", sm: "auto" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LocationInfoCard location={data} />
      </Box>

      <Box sx={{ width: "100%", mt: { xs: 3, lg: 4 } }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            mb: { xs: 2, lg: 3 },
            textAlign: "center",
            fontSize: { xs: "1.25rem", sm: "1.5rem", lg: "1.75rem" },
          }}
        >
          Персонажи локации ({residentsUrls.length})
        </Typography>

        {isLoadingResidents ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : isErrorResidents ? (
          <Typography color="error" align="center" mt={4}>
            {(residentsError as Error).message}
          </Typography>
        ) : residents && residents.length > 0 ? (
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
            {residents.map((character) => (
              <Link
                style={{ textDecoration: "none" }}
                key={character.id}
                href={`/characters/${character.id}`}
              >
                <CharacterCard
                  name={character.name}
                  image={character.image}
                  height={120}
                  widht={200}
                />
              </Link>
            ))}
          </Box>
        ) : (
          <Typography align="center" mt={4} color="text.secondary">
            На этой локации нет персонажей
          </Typography>
        )}
      </Box>
    </Box>
  );
};
