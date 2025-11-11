"use client";

import { PaginationHome } from "@/shared/ui/pagination/Pagination";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { LocationApiResponse } from "@/entities/location/model/type";
import { LocationsList } from "../components/LocationsList";

interface CharactersListPageProps {
  initialData: LocationApiResponse;
  currentPage: number;
}

export const LocationsListPage = ({
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
      <LocationsList locations={initialData.results} />
      <PaginationHome
        currentPage={currentPage}
        totalPages={initialData.info.pages}
        onChangePage={handleChangePage}
      />
    </>
  );
};
