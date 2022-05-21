import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  height: 200px;

  border-radius: 10px;

  margin: 2rem 0;
  padding: 3rem 0;

  box-shadow: gray 0px 7px 15px 0px;

  background-color: var(--text-body);

  &:hover {
    border: 3px solid var(--blue);
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;

  color: var(--background);
`;

export const EpisodeName = styled.p`
  font-size: 16px;
  color: var(--background);
`;

export const EpisodeAirDate = styled.p`
  font-size: 16px;
  color: var(--background);
`;

export const EpisodeCreated = styled.p`
  font-size: 16px;
  color: var(--background);
`;

export const EpisodeCharacters = styled.p`
  font-size: 16px;
  color: var(--background);
`;
