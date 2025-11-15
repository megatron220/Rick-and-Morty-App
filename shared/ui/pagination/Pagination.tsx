"use client";

import { Pagination, Stack, useMediaQuery } from "@mui/material";

type PaginationProps = {
  totalPages: number;
  onChangePage: (page: number) => void;
  currentPage: number;
  disabled?: boolean;
};

export const PaginationHome = ({
  totalPages,
  onChangePage,
  currentPage,
  disabled = false,
}: PaginationProps) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const paginationSize = isSmallScreen ? "small" : "medium";

  return (
    <Stack
      sx={{
        alignContent: "center",
        alignItems: "center",
        mt: { xs: "10px", sm: "15px" },
        px: { xs: 2, sm: 0 },
      }}
      spacing={2}
    >
      <Pagination
        size={paginationSize}
        page={currentPage}
        count={totalPages}
        disabled={disabled}
        onChange={(_e, value) => onChangePage(value)}
        sx={{
          "& .MuiPagination-ul": {
            flexWrap: "wrap",
            justifyContent: "center",
          },
        }}
      />
    </Stack>
  );
};
