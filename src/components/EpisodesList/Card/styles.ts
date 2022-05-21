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

  @media screen and (max-width: 375px) {
    width: 250px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (max-width: 480px) {
    width: 315px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (max-width: 600px) {
    width: 400px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 200px;

    box-shadow: none;

    text-align: center;
  }

  @media screen and (max-width: 1441px) {
    width: 300px;
    height: 200px;

    box-shadow: none;

    text-align: center;
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
