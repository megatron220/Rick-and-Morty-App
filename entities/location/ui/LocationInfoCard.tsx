import { Box } from "@mui/material";
import { LocationInformation } from "../model/type";
import { getRandomImages } from "@/shared/lib/getRandomImage";

type locationInfoCardProps = {
  location: LocationInformation;
};

export const LocationInfoCard = ({ location }: locationInfoCardProps) => {
  const image = getRandomImages();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", mt: "120px" }}>
      <Box>
        <img src={image} alt={location.name} />
      </Box>

      <Box>
        <ol>
          <li>{location.name}</li>
          <li>{location.type}</li>
          <li>{location.demension}</li>
        </ol>
      </Box>
    </Box>
  );
};
