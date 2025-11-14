import { getRandomEpisodes } from "@/shared/lib/getRandomEpisodes";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type EpisodeCardProps = {
  name: string;
};

export const EpisodeCard = ({ name }: EpisodeCardProps) => {
  const image = getRandomEpisodes();
  return (
    <Card
      sx={{
        width: 250,
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
