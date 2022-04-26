import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global";

interface CharacterInfoCard {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

export function App() {
  const [characters, setCharacters] = useState<CharacterInfoCard[]>(
    [] as CharacterInfoCard[]
  );
  const [pageNumbers, setPageNumbers] = useState(0);

  const onClick = () => {
    console.log("cliquei");
  };

  useEffect(() => {
    api.get("character/?page=1").then((response) => {
      setCharacters(response.data.results);
      setPageNumbers(response.data.info.pages);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <CardList characters={characters} />
        <Pagination numberOfPages={pageNumbers} onClick={onClick} />
      </div>
      <GlobalStyle />
    </div>
  );
}
