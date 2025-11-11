import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type characterCardProps = {
  name: string;
  image: string;
};

export const CharacterCard = ({ name, image }: characterCardProps) => {
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
