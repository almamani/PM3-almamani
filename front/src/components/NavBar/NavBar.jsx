import imgLogo from "../../assets/logo_odonto.svg";
import { Container } from "./styled";

const NavBar = () => {
  return (
    <>
      <Container>
        <figure>
          <img src={imgLogo} alt="" />
        </figure>

        <ul>
          <li>Home</li>
          <li>Mis Turnos</li>
          <li>About</li>
          <li>Contacto</li>
        </ul>
      </Container>
      <hr />
    </>
  );
};

export default NavBar;
