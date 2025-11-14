"use client";

import { useLocation } from "@/entities/location/model/query";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { LocationsList } from "../../list/components/LocationsList";
import { PaginationHome } from "@/shared/ui";

export const LocationInfoBlock = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page") || "1");
  const { data, isLoading, isError, error, isFetching } = useLocation(page);

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

  const locations = data?.results ?? [];
  const totalPages = data?.info.pages ?? 1;

  return (
    <Box sx={{ mt: { xs: 4, sm: 6, md: 10 } }}>
      <Box>
        <LocationsList locations={locations} />
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
