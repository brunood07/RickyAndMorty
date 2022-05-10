import styled from "styled-components";

interface Props {
  expanded: boolean;
}

export const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
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
    text-decoration: none;
    display: block;
    width: 100%;
    font-size: 16px;

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
        // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
        position: absolute;
        top: 60px;
        left: 0;
        // stacks the li tags vertically
        flex-direction: column;
        // makes menu span full height and width
        width: 100%;
        height: calc(100vh - 77px);
        background-color: white;
        border-top: 1px solid black;
      }

      li {
        // centers link text and strips off margin
        text-align: center;
        margin: 0;
      }

      li a {
        color: black;
        // increases the surface area of the anchor tag to span the full width of the menu
        width: 100%;
        padding: 1.5rem 0;
      }

      li:hover {
        background-color: #eee;
      }
    }
  }
`;

export const HamburguerButton = styled.button`
  border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #283b8b;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;

  &:hover {
    background-color: #2642af;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

//https://blog.logrocket.com/create-responsive-navbar-react-css/
