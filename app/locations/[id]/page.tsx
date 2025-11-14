import { LocationDetailInfoBlock } from "@/features/locations/details/ui/LocationDetailInfoBlock";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function LocationInfoPage({ params }: Props) {
  const { id } = await params;
  const locationId = Number(id);

  return <LocationDetailInfoBlock id={locationId} />;
}
