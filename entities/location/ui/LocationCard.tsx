import { getRandomImages } from "@/shared/lib/getRandomImage";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type LocationCardProps = {
  name: string;
};

export const LocationCard = ({ name }: LocationCardProps) => {
  const image = getRandomImages();
  return (
    <Card
      sx={{
        width: { sm: 180, xs: 280, md: 390 },
        maxWidth: { xs: "100%", sm: "350px" },
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: { xs: 240, sm: 340 },
          objectFit: "cover",
        }}
        image={image}
        title={name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            wordBreak: "break-word",
            textAlign: "center",
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
