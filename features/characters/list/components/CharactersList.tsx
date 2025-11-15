import {
  Character,
  CharacterApiResponse,
} from "@/entities/character/model/types";
import { CharacterCard } from "@/entities/character/ui/CharacterCard";
import { Box } from "@mui/material";
import Link from "next/link";

type charactersListProps = {
  characters: CharacterApiResponse["results"];
};

export const CharactersList = ({ characters }: charactersListProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: "10px", sm: "15px" },
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: { xs: 2, sm: 3 },
          justifyItems: "center",
        }}
      >
        {characters.map((character) => (
          <Link
            style={{ textDecoration: "none" }}
            key={character.id}
            href={`/characters/${character.id}`}
          >
            <CharacterCard
              name={character.name}
              image={character.image}
              height={240}
              widht={310}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
};
