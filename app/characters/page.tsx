import { getCharactersData } from "@/features/characters/list/api/fetchCharacters";
import { CharactersListPage } from "@/features/characters/list/ui/CharactersListPage";

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function CharactersPage({ searchParams }: Props) {
  const { page: pageStr } = await searchParams;
  const page = Number(pageStr) || 1;
  const data = await getCharactersData(page);

  return <CharactersListPage initialData={data} currentPage={page} />;
}
