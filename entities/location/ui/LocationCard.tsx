import { getRandomImages } from "@/shared/lib/getRandomImage";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type LocationCardProps = {
  name: string;
};

export const LocationCard = ({ name }: LocationCardProps) => {
  const image = getRandomImages();
  return (
    <Card sx={{ width: "350px" }}>
      <CardMedia sx={{ height: 340 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
