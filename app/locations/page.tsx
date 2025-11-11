import { getLocationsInfo } from "@/features/locations/list/api/fetchLocations";
import { LocationsListPage } from "@/features/locations/list/ui/LocationsListPage";

interface Props {
  params: Promise<{ page?: number }>;
}

export default async function LocationPage({ params }: Props) {
  const { page: pageStr } = await params;
  const page = Number(pageStr) || 1;
  const data = await getLocationsInfo(page);
  
  return <LocationsListPage initialData={data} currentPage={page} />;
}
