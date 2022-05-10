import { Card } from "../Card";
import { Container, Title, TitleContainer, GridContainer } from "./styles";

interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}
interface CardListProps {
  characters: CharacterData[];
}

export const CardList = ({ characters }: CardListProps) => {
  return (
    <Container>
      <TitleContainer>
        <Title>Personagens</Title>
      </TitleContainer>
      <GridContainer>
        {characters.map((item) => (
          <Card
            id={item.id}
            name={item.name}
            status={item.status}
            image={item.image}
            species={item.species}
          />
        ))}
      </GridContainer>
    </Container>
  );
};
