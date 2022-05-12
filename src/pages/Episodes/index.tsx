import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import useEpisodes from "../../hooks/useEpisodes";
import { Container, ContentContainer, PageTitle } from "./styles";

export function Episodes() {
  const { episodes, fetchEpisodes, totalPages } = useEpisodes();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEpisodes(page);
  }, []);

  return (
    <Container>
      <Header />

      <ContentContainer>
        <PageTitle>Episodes</PageTitle>
      </ContentContainer>
    </Container>
  );
}
