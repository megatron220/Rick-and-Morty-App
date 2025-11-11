export interface Location {
  id: number;
  name: string;
  type: string;
  demension: string;
}

export interface LocationApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: null;
  };
  results: Location[];
}

export interface LocationInformation {
  id: number;
  name: string;
  type: string;
  demension: string;
}
