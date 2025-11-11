import {
  Character,
  CharacterApiResponse,
} from "@/entities/character/model/types";
import { CharacterCard } from "@/entities/character/ui/CharacterCard";
import { Box, Grid } from "@mui/material";
import Link from "next/link";

type charactersListProps = {
  characters: CharacterApiResponse["results"];
};

export const CharactersList = ({ characters }: charactersListProps) => {
  return (
    <Box sx={{ width: "100%", mt: "15px" }}>
      <Grid
        sx={{ justifyContent: "center" }}
        size={20}
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {characters.map((character) => {
          return (
            <Link key={character.id} href={`/characters/${character.id}`}>
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
              />
            </Link>
          );
        })}
      </Grid>
    </Box>
  );
};
