import { useState } from "react";
import { api } from "../services/api";

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterData[];
  created: string;
}

export default function useEpisodes() {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([] as EpisodeData[]);
  const [totalPages, setTotalPages] = useState(0);

  function fetchEpisodes(page: number) {
    api.get(`/episode/?page=${page}`).then((response) => {
      setEpisodes(response.data.results);
      setTotalPages(response.data.info.pages);
      console.log(response);
    });
  }

  return { episodes, fetchEpisodes, totalPages };
}
