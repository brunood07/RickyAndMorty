import { Header } from "../../components/Header";

import {
  Container,
  HomeContainer,
  HomeImageContainer,
  HomeImage,
  HomeInfoContainer,
  // Title,
  HomeInfoText,
  HomeInfoTitle,
  CTAText,
  CTAButton,
  CTAButtonContainer,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      {/* <Title>Welcome</Title> */}

      <HomeContainer>
        <HomeImageContainer>
          <HomeImage src="home-image.jpg" alt="Rick openning Morty eyes" />
        </HomeImageContainer>

        <HomeInfoContainer>
          <HomeInfoTitle>Welcome</HomeInfoTitle>
          <HomeInfoText>
            Dive into the most comic universe in television
          </HomeInfoText>
          <HomeInfoText>
            An animated series on adult-swim about the infinite adventures of
            Rick, a genius alcoholic and careless scientist, with his grandson
            Morty, a 14 year-old anxious boy who is not so smart. Together, they
            explore the infinite universes; causing mayhem and running into
            trouble.
          </HomeInfoText>

          <CTAText>Want to know more about this universe?</CTAText>
          <CTAText>Explore through our pages!</CTAText>
          <CTAButtonContainer>
            <CTAButton>Characters</CTAButton>
            <CTAButton>Episodes</CTAButton>
          </CTAButtonContainer>
        </HomeInfoContainer>
      </HomeContainer>
    </Container>
  );
}
