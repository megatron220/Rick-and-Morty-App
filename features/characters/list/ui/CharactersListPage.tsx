"use client";

import { PaginationHome } from "@/shared/ui/pagination/Pagination";
import { CharacterApiResponse } from "@/entities/character/model/types";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { CharactersList } from "../components/CharactersList";

interface CharactersListPageProps {
  initialData: CharacterApiResponse;
  currentPage: number;
}

export const CharactersListPage = ({
  initialData,
  currentPage,
}: CharactersListPageProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    router.push(`?${params.toString()}`);
  };

  return (
    <>
      <CharactersList characters={initialData.results} />
      <PaginationHome
        currentPage={currentPage}
        totalPages={initialData.info.pages}
        onChangePage={handleChangePage}
      />
    </>
  );
};
