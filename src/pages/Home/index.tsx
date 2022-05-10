import { Header } from "../../components/Header";

import {
  Container,
  HomeContainer,
  HomeImageContainer,
  HomeInfoContainer,
  Title,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Title>Welcome</Title>

      <HomeContainer>
        <HomeImageContainer></HomeImageContainer>

        <HomeInfoContainer></HomeInfoContainer>
      </HomeContainer>
    </Container>
  );
}
