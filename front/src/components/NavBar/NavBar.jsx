import { Container } from "./styled";
import { Link, useLocation } from "react-router-dom";
import imgLogo from "../../assets/logo_odonto.svg";

import {
  SLASH,
  HOME,
  MY_APPOIMENTS,
  NEW_APPOIMENT,
  REGISTER,
} from "../../helpers/pathsRoutes";
import Logged from "../Logged/Logged";
import { unsetUser } from "../../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userSlice.user.name);

  const handleLogout = () => {
    dispatch(unsetUser());
  };

  return (
    <>
      <Container>
        <figure className="logo">
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

        {user && <Logged />}
      </Container>
      <hr />
    </>
  );
};

export default NavBar;
