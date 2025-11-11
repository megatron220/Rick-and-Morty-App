import {
  Character,
  CharacterApiResponse,
} from "@/entities/character/model/types";
import { CharacterCard } from "@/entities/character/ui/CharacterCard";
import { LocationApiResponse } from "@/entities/location/model/type";
import { LocationCard } from "@/entities/location/ui/LocationCard";
import { Box, Grid } from "@mui/material";
import Link from "next/link";

type locationListProps = {
  locations: LocationApiResponse["results"];
};

export const LocationsList = ({ locations }: locationListProps) => {
  return (
    <Box sx={{ width: "100%", mt: "15px" }}>
      <Grid
        sx={{ justifyContent: "center" }}
        size={20}
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {locations.map((location) => {
          return (
            <Link key={location.id} href={`/locations/${location.id}`}>
              <LocationCard key={location.id} name={location.name} />
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};
