export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface CharacterApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export interface CharacterInfrormation {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string | "";
  gender: string;

  origin: {
    name: string;
    url: string;
  };

  location: {
    name: string;
    url: string;
  };

  image: string;
  episode: string[];
  url: string;
  created: string;
}
