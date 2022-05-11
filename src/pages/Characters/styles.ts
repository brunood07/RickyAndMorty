import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 375px) {
    width: 100%;

    align-items: center;
  }
`;
