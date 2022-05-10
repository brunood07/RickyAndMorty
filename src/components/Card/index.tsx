import {
  Container,
  ImageContainer,
  Name,
  Species,
  Status,
  Gender,
  Origin,
  InfoContainer,
  TextContainer,
} from "./styles";

interface CharacterData {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
}

export const Card = ({
  name,
  status,
  image,
  species,
  gender,
  origin,
  location,
}: CharacterData) => {
  return (
    <Container>
      <ImageContainer src={image} />

      <Name>{name}</Name>

      <InfoContainer>
        Species:
        <Species>{species}</Species>
      </InfoContainer>

      <InfoContainer>
        Status:
        <Status>{status}</Status>
      </InfoContainer>

      <InfoContainer>
        Gender:
        <Gender>{gender}</Gender>
      </InfoContainer>

      <TextContainer>Origin:</TextContainer>

      <InfoContainer>
        <Origin>{origin.name}</Origin>
      </InfoContainer>
    </Container>
  );
};
