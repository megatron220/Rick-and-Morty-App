import { CharacterInfrormation } from "@/entities/character/model/types";
import { CharacterInfoCard } from "@/entities/character/ui/CharacterInfoCard";
import { Box } from "@mui/material";

type characterInfoBlockProps = {
  characterInfo: CharacterInfrormation;
};

export const CharacterInfoBlock = ({
  characterInfo,
}: characterInfoBlockProps) => {
  return (
    <Box>
      <CharacterInfoCard character={characterInfo} />;
    </Box>
  );
};
