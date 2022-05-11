import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  margin: 3rem 0;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const HomeImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  /* background-color: green; */
`;

export const HomeImage = styled.img`
  width: 20vw;
  height: 80vh;
  border-radius: 4px;
`;

export const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 100vh;

  padding: 0 10rem;
`;

export const HomeInfoTitle = styled.p`
  font-size: 38px;
  font-weight: bold;
  color: #20bf55;
`;

export const HomeInfoText = styled.p`
  font-size: 18px;
  color: #20bf55;
  text-align: center;
  margin: 2rem 0;
`;

export const CTAText = styled.p`
  color: #20bf55;
`;

export const CTAButtonContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  width: 100%;
`;

export const CTAButton = styled.div`
  width: 250px;
  height: 35px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--blue);
  color: #20bf55;

  border-radius: 8px;
  border: 0;

  margin-right: 5px;

  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
