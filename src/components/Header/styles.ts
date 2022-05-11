import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  width: 100%;
  height: 7rem;
  background-color: var(--blue);

  box-shadow: gray 0px 0.5px 9px 0px;
`;

export const Logo = styled.img`
  height: 70px;
  width: 200px;
  background-color: transparent;
`;

export const NavBar = styled.nav`
  width: 500px;
  height: 15px;
  background-color: green;
`;
