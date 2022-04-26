import { Card } from "../Card";
import { Container, Title, TitleContainer, GridContainer } from "./styles";

interface CharacterInfoCard {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}
interface CardListProps {
  characters: CharacterInfoCard[];
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
