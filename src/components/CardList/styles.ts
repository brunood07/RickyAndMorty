import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1``;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
`;
