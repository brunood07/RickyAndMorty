import { useEffect } from "react";
import { CardList } from "../components/CardList";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import useCharacters from "../hooks/useCharacters";
import usePagination from "../hooks/usePagination";

import { GlobalStyle } from "../styles/global";

export function Characters() {
  const { characters, fetchCharacters } = useCharacters();
  const { actualPage } = usePagination();
  console.log(characters);

  useEffect(() => {
    fetchCharacters(actualPage);
  }, [actualPage]);

  return (
    <div>
      <Header />
      <div>
        <CardList characters={characters} />
        <Pagination />
      </div>
      <GlobalStyle />
    </div>
  );
}
