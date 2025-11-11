"use client";

import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";

type PaginationProps = {
  totalPages: number;
  onChangePage: (page: number) => void;
  currentPage: number;
};

export const PaginationHome = ({
  totalPages,
  onChangePage,
  currentPage,
}: PaginationProps) => {
  return (
    <Stack
      sx={{ alignContent: "center", alignItems: "center", mt: "15px" }}
      spacing={2}
    >
      <Pagination
        size="large"
        page={currentPage}
        count={totalPages}
        onChange={(_e, value) => onChangePage(value)}
      />
    </Stack>
  );
};
