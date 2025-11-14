// widgets/PortalCard/PortalCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function PortalCard({
  title,
  href,
  icon,
  text,
}: {
  title: string;
  href: string;
  icon: string;
  text: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          maxWidth: { xs: "100%", sm: 345 },
          width: "100%",
          height: { xs: 280, sm: 300 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height={{ xs: 120, sm: 140 }}
          image={icon}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
