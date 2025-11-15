import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { memo } from "react";

type characterCardProps = {
  name: string;
  image: string;
  height: number;
  widht: number;
};

export const CharacterCard = memo(({
  name,
  image,
  height,
  widht,
}: characterCardProps) => {
  return (
    <Card
      sx={{
        width: { sm: 180, xs: 280, md: 390 },
        maxWidth: { xs: "220px", sm: widht },
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: { xs: height * 0.8, sm: height },
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
});
