"use client";

import { Box, Button, Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Персонажи", href: "/characters" },
  { label: "Локации", href: "/locations" },
  { label: "Эпизоды", href: "/episodes" },
];

type NavLinksProps = {
  onLinkClick?: () => void;
};

export const NavLinks = ({ onLinkClick }: NavLinksProps = {}) => {
  const pathName = usePathname();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 1, md: 0 }}
      sx={{ alignItems: { xs: "flex-start", md: "center" } }}
    >
      {links.map((link) => {
        return (
          <Button
            key={link.href}
            variant="text"
            LinkComponent={Link}
            href={link.href}
            color="inherit"
            onClick={onLinkClick}
            fullWidth={{ xs: true, md: false }}
            sx={{
              fontWeight: pathName === link.href ? "bold" : "normal",
              textDecoration: pathName === link.href ? "underline" : "none",
              justifyContent: { xs: "flex-start", md: "center" },
              fontSize: { xs: "0.875rem", md: "1rem" },
            }}
          >
            {link.label}
          </Button>
        );
      })}
    </Stack>
  );
};
