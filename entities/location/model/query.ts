import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getLocationDetailInfo } from "@/features/locations/details/api/fetchDetailLocations";
import { LocationApiResponse, LocationInformation } from "./type";
import { getLocationsInfo } from "@/features/locations/list/api/fetchLocations";

export const useLocationDetail = (
  id: number
): UseQueryResult<LocationInformation, Error> => {
  return useQuery<LocationInformation, Error>({
    queryKey: ["locationDetail", id],
    queryFn: () => getLocationDetailInfo(id),
    enabled: !!id,
  });
};

export const useLocation = (
  page: number
): UseQueryResult<LocationApiResponse, Error> => {
  return useQuery<LocationApiResponse, Error>({
    queryKey: ["location", page],
    queryFn: () => getLocationsInfo(page),
  });
};
