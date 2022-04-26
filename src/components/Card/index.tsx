import { Container, ImageContainer, Name, Species, Status } from "./styles";

interface CharacterInfoCard {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
}

export const Card = ({
  id,
  name,
  status,
  image,
  species,
}: CharacterInfoCard) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Name>{name}</Name>
      <Species>{species}</Species>
      <Status>{status}</Status>
    </Container>
  );
};
