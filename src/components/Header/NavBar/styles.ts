import styled from "styled-components";

interface Props {
  expanded: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  position: relative;

  height: 60px;
  width: 100%;

  padding: 0.5rem 0rem;

  color: #20bf55;
`;

export const NavigationMenu = styled.div<Props>`
  margin-left: auto;

  ul {
    display: flex;

    padding: 0;
  }

  li {
    list-style-type: none;

    margin: 0 1rem;
  }

  li a {
    display: block;

    width: 100%;

    font-size: 16px;

    text-decoration: none;

    transition: all 0.3s;

    &:visited {
      color: inherit;
    }

    &:hover {
      text-decoration: underline;
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }

  expanded && {
    @media screen and (max-width: 768px) {
      display: block;

      ul {
        position: absolute;
        top: 60px;
        left: 0;

        flex-direction: column;

        width: 100%;
        height: calc(100vh - 77px);

        background-color: white;

        border-top: 1px solid black;
      }

      li {
        text-align: center;
        margin: 0;
      }

      li a {
        width: 100%;

        color: black;

        padding: 1.5rem 0;
      }

      li:hover {
        background-color: #eee;
      }
    }
  }
`;

export const HamburguerButton = styled.button`
  display: none;

  height: 40px;
  width: 40px;

  border: 0;
  border-radius: 50%;

  padding: 0.5rem;

  background-color: #283b8b;

  cursor: pointer;

  position: absolute;
  top: 50%;
  right: 25px;

  transition: background-color 0.2s ease-in-out;
  transform: translateY(-50%);

  &:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

//https://blog.logrocket.com/create-responsive-navbar-react-css/
