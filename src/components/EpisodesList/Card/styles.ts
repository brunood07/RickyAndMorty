import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  height: 200px;

  border-radius: 10px;

  padding: 3rem 0;

  background-color: var(--text-title);

  &:hover {
    border: 3px solid var(--blue);
  }
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: bold;

  color: white;
`;

export const EpisodeName = styled.p`
  font-size: 16px;
  color: white;
`;

export const EpisodeAirDate = styled.p`
  font-size: 16px;
  color: white;
`;

export const EpisodeCreated = styled.p`
  font-size: 16px;
  color: white;
`;

export const EpisodeCharacters = styled.p`
  font-size: 16px;
  color: white;
`;
