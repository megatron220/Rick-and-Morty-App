import { LocationApiResponse } from "@/entities/location/model/type";
import { LocationCard } from "@/entities/location/ui/LocationCard";
import { Box } from "@mui/material";
import Link from "next/link";

type locationListProps = {
  locations: LocationApiResponse["results"];
};

export const LocationsList = ({ locations }: locationListProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: "10px", sm: "15px" },
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 2, sm: 3 },
          justifyItems: "center",
        }}
      >
        {locations.map((location) => (
          <Link
            style={{ textDecoration: "none" }}
            key={location.id}
            href={`/locations/${location.id}`}
          >
            <LocationCard name={location.name} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};
