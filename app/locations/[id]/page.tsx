import { getLocationDetailInfo } from "@/features/locations/details/api/fetchLocationsInfo";
import { LocationInfoBlock } from "@/features/locations/details/ui/LocationInfoBlock";

type Props = {
  params: Promise<{ id?: number }>;
};

export default async function LocationInfoPage({ params }: Props) {
  const { id: idStr } = await params;
  const id = Number(idStr) ;
  const data = await getLocationDetailInfo(id);

  return <LocationInfoBlock locationInfo={data} />;
}
