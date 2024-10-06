import { Link, useLocation } from "react-router-dom";
import imgLogo from "../../assets/logo_odonto.svg";
import { Container } from "./styled";
import {
  SLASH,
  HOME,
  MY_APPOIMENTS,
  NEW_APPOIMENT,
  REGISTER,
} from "../../helpers/pathsRoutes";

const NavBar = () => {
  const { pathname } = useLocation();

  const handleLogout = () => {
    console.log("Click en cerrar sesión");
  };

  return (
    <>
      <Container>
        <figure>
          <img src={imgLogo} alt="Logo Odontología" />
        </figure>

        {pathname !== SLASH && pathname !== REGISTER && (
          <ul>
            <Link to={HOME}>
              <li>Home</li>
            </Link>
            <Link to={MY_APPOIMENTS}>
              <li>Mis Turnos</li>
            </Link>
            <Link to={NEW_APPOIMENT}>
              <li>Nuevo Turno</li>
            </Link>
            <Link to={SLASH}>
              <li onClick={handleLogout}>Cerrar Sesión</li>
            </Link>
          </ul>
        )}
      </Container>
      <hr />
    </>
  );
};

export default NavBar;
