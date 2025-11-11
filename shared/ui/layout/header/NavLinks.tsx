"use client";

import { Box, Button, ButtonGroup, Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Персонажи", href: "/characters" },
  { label: "Локации", href: "/locations" },
  { label: "Эпизоды", href: "episodes" },
];

export const NavLinks = () => {
  const pathName = usePathname();

  return (
    <Box>
      {links.map((link) => {
        return (
          <ButtonGroup key={link.href}>
            <Button
              variant="text"
              key={link.href}
              LinkComponent={Link}
              href={link.href}
              color="inherit"
              sx={{
                fontWeight: pathName === link.href ? "bold" : "normal",
                textDecoration: pathName === link.href ? "underline" : "none",
              }}
            >
              {link.label}
            </Button>
          </ButtonGroup>
        );
      })}
    </Box>
  );
};
