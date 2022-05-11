import { useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import useCharacters from "../../hooks/useCharacters";

export function Characters() {
  const { characters, fetchCharacters, totalPages } = useCharacters();
  const [page, setPage] = useState(1);
  console.log(characters);
  const handlePages = (updatePage: number) => {
    if (updatePage <= 0) {
      setPage(1);
    }

    setPage(updatePage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(characters);

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <div>
      <Header />
      <div>
        <CardList characters={characters} />
        <Pagination
          page={page}
          totalPages={totalPages}
          handlePages={handlePages}
        />
      </div>
    </div>
  );
}
