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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: var(--text);
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));

  @media screen and (max-width: 375px) {
    align-items: center;
    justify-content: center;
  }
`;
