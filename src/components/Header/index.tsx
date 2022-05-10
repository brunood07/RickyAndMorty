import { NavBar } from "./NavBar";
import { Container, Logo } from "./styles";
// import LogoIMG from "../../assets/logo.png";

export const Header = () => {
  return (
    <Container>
      <Logo src="logo.png" />
      <NavBar />
    </Container>
  );
};
