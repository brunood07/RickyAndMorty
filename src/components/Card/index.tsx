import { Container, ImageContainer, Name, Species, Status } from "./styles";

interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  image: string;
}

export const Card = ({ id, name, status, image, species }: CharacterData) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Name>{name}</Name>
      <Species>{species}</Species>
      <Status>{status}</Status>
    </Container>
  );
};
