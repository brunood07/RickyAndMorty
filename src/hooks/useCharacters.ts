import { useState } from "react";
import { api } from "../services/api";

interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

export default function useCharacters() {
  const [characters, setCharacters] = useState<CharacterData[]>(
    [] as CharacterData[]
  );
  const [totalPages, setTotalPages] = useState(0);

  function fetchCharacters(page: number) {
    api.get(`/character/?page=${page}`).then((response) => {
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
    });
  }

  return { characters, setCharacters, fetchCharacters, totalPages };
}
