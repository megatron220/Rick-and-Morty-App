import { CharacterInfrormation } from "@/entities/character/model/types";
import { CharacterInfoCard } from "@/entities/character/ui/CharacterInfoCard";
import { LocationInformation } from "@/entities/location/model/type";
import { LocationInfoCard } from "@/entities/location/ui/LocationInfoCard";
import { Box } from "@mui/material";

type locationInfoBlockProps = {
  locationInfo: LocationInformation;
};

export const LocationInfoBlock = ({ locationInfo }: locationInfoBlockProps) => {
  return (
    <Box>
      <LocationInfoCard  location={locationInfo} />;
    </Box>
  );
};
