import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 3rem 3rem;

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.h1`
  color: var(--text);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));

  width: 100%;

  @media screen and (max-width: 375px) {
    align-items: center;
    justify-content: center;
  }
`;
