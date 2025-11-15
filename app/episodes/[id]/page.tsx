import { getDetailEpisode } from "@/features/episodes/details/api/fetchDetailEpisodes";
import { EpisodeInfoBlock } from "@/features/episodes/details/ui/EpisodeInfoBlock";
import { EpisodeDetailInfoBlock } from "@/features/episodes/list/ui/EpisodeDetailInfoBlock";

type Props = {
  params: Promise<{ id?: number }>;
};

export default async function EpisodeInfoPage({ params }: Props) {
  const { id } = await params;
  const episodeId = Number(id);

  return <EpisodeDetailInfoBlock id={episodeId} />;
}
