"use client";

import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { PaginationHome } from "@/shared/ui";
import { CharactersList } from "../../list/components/CharactersList";
import { useCharacters } from "@/entities/character/model/query";

export const CharacterInfoBlock = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page") || "1");
  const { data, isLoading, isError, error, isFetching } = useCharacters(page);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
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

  const characters = data?.results ?? [];
  const totalPages = data?.info.pages ?? 1;

  return (
    <Box sx={{ mt: { xs: 4, sm: 6, md: 10 } }}>
      <Box>
        <CharactersList characters={characters} />
      </Box>
      <Box>
        <PaginationHome
          totalPages={totalPages}
          onChangePage={(value: number) => handlePageChange(value)}
          currentPage={page}
          disabled={isFetching}
        />
      </Box>
    </Box>
  );
};
