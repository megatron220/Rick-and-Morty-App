import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { LocationInformation } from "../model/type";
import { getRandomImages } from "@/shared/lib/getRandomImage";

type locationInfoCardProps = {
  location: LocationInformation;
};

export const LocationInfoCard = ({ location }: locationInfoCardProps) => {
  const image = getRandomImages();
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: 345 },
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <CardMedia
        component="img"
        height={{ xs: 280, sm: 340 }}
        src={image}
        alt={location.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
        >
          {location.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        ></Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mt: 1 }}>
          Участников: {location.residents.length}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          Тип: {location.type}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          Деменшн: {location.demension}
        </Typography>
      </CardContent>
    </Card>
  );
};
