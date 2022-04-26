import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Card } from "../Card";
import { Container, Title, TitleContainer } from "./styles";

interface CharacterInfoCard {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

export const CardList = () => {
  const [characters, setCharacters] = useState<CharacterInfoCard[]>(
    [] as CharacterInfoCard[]
  );

  useEffect(() => {
    api.get("character/?page=1").then((response) => {
      setCharacters(response.data);
    });
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>Personagens</Title>
      </TitleContainer>
      {characters.map((item) => (
        <Card
          id={item.id}
          name={item.name}
          status={item.status}
          image={item.image}
          species={item.species}
        />
      ))}
    </Container>
  );
};
