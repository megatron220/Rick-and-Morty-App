import { getCharacterInfo } from "@/features/characters/details/api/fetchCharacterInfo";
import { CharacterInfoBlock } from "@/features/characters/details/ui/CharacterInfoBlock";

type Props = {
  params: Promise<{ id?: number }>;
};

export default async function ChatacterInfoPage({ params }: Props) {
  const { id: idStr } = await params;
  const id = Number(idStr);
  const data = await getCharacterInfo(id);

  return <CharacterInfoBlock characterInfo={data} />;
}
