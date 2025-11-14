"use client";

import { EpisodesList } from "../components/EpisodesList";
import { PaginationHome } from "@/shared/ui/pagination/Pagination";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEpisodes } from "@/entities/episode/model/query";
import { useRouter, useSearchParams } from "next/navigation";

export const EpisodesInfoBlock = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page") || "1");

  const { data, isLoading, isError, error, isFetching } = useEpisodes(page);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(newPage));
    router.push(`?${params.toString()}`, { scroll: false });
  };

  if (isLoading && !data) {
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

  const episodes = data?.results ?? [];
  const totalPages = data?.info.pages ?? 1;

  return (
    <Box sx={{ mt: { xs: 4, sm: 6, md: 10 } }}>
      <EpisodesList episodes={episodes} />
      <PaginationHome
        totalPages={totalPages}
        currentPage={page}
        onChangePage={handlePageChange}
        disabled={isFetching}
      />
    </Box>
  );
};

