import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Title = styled.h1`
  margin: 3rem 0;

  color: white;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const HomeImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 100vh;

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 100%;

    padding: 0 2rem;

    margin-top: 1rem;
  }
`;

export const HomeImage = styled.img`
  width: 20vw;
  height: 80vh;

  border-radius: 4px;

  @media screen and (max-width: 375px) {
    width: 30vw;
    height: 80vh;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 100%;
  }
`;

export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 100vh;

  padding: 0 10rem;

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 100%;

    padding: 2rem 2rem;

    margin-top: 1rem;
  }
`;

export const HomeInfoTitle = styled.p`
  font-size: 38px;
  font-weight: bold;
  color: var(--text);
`;

export const HomeInfoText = styled.p`
  font-size: 18px;
  color: var(--text);

  text-align: center;

  margin: 2rem 0;
`;

export const CTAText = styled.p`
  color: var(--text);
`;

export const CTAButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 3rem;

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 100%;

    flex-direction: column;

    margin-top: 1rem;
  }
`;

export const CTAButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 35px;

  background-color: var(--blue);
  color: #fff;

  border-radius: 8px;
  border: 0;

  margin-right: 5px;

  transition: all 0.3s;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 375px) {
    width: 100%;

    padding: 0 2rem;

    margin-top: 1rem;
  }
`;
