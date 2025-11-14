import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CharacterInfrormation } from "../model/types";
import { parseISO, format } from "date-fns";

type characterInfoCardProps = {
  character: CharacterInfrormation;
};

export const CharacterInfoCard = ({ character }: characterInfoCardProps) => {
  const iso = character.created;
  const data = parseISO(iso);
  const resultData = format(data, "dd.MM.yyyy");
  return (
    <Card
      sx={{
        maxWidth: { xs: "100%", sm: 305 },
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <CardMedia
        component="img"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: "cover", height: { xs: 280, sm: 340 } }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
        >
          {character.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
        ></Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" }, mt: 1 }}>
          Эпизоды: {character.episode.length}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          В сериале с - {resultData}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          Статус: {character.status}
        </Typography>
        <Typography sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}>
          Гендер: {character.gender}
        </Typography>
      </CardContent>
    </Card>
  );
};
