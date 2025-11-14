import { getCharacterInfo } from "@/features/characters/details/api/fetchDetailCharacters";
import { CharacterDetailInfoBlock } from "@/features/characters/details/ui/CharacterDetailInfoBlock";
import { CharacterInfoBlock } from "@/features/characters/details/ui/CharacterInfoBlock";

type Props = {
  params: Promise<{ id?: number }>;
};

export default async function ChatacterInfoPage({ params }: Props) {
  const { id } = await params;
  const characterId = Number(id);
  return <CharacterDetailInfoBlock id={characterId} />;
}
