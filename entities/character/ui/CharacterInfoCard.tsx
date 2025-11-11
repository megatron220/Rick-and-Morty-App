import { Box } from "@mui/material";
import { CharacterInfrormation } from "../model/types";

type characterInfoCardProps = {
  character: CharacterInfrormation;
};

export const CharacterInfoCard = ({ character }: characterInfoCardProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", mt: "120px" }}>
      <Box>
        <img src={character.image} alt={character.name} />
      </Box>

      <Box>
        <ol>
          <li>{character.name}</li>
          <li>{character.created}</li>
          <li>{character.gender}</li>
          <li>{character.image}</li>
          <li>{character.location.name}</li>
          <li>{character.origin.name}</li>
          <li>{character.species}</li>
          <li>{character.status}</li>
        </ol>
      </Box>
    </Box>
  );
};
