import { Container } from "./styled";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { HOME, REGISTER } from "../../helpers/pathsRoutes";
import { setUser } from "../../redux/usersSlice";
import { useUserLoginMutation } from "../../redux/usersApi";
import { useDispatch } from "react-redux";
import { validateLogin } from "../../helpers/validateLogin";

const Login = () => {
  const navigate = useNavigate();

  const [userLogin] = useUserLoginMutation();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: " ",
    password: " ",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });

    setErrors(validateLogin({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateLogin(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const user = await userLogin(userData).unwrap();
        dispatch(setUser(user));
        navigate(HOME);
      } catch (error) {
        alert("Usuario y/o Contraseña Incorrectos", error);
      }
    }
  };

  return (
    <Container>
      <h1>Central de Turnos - Bienvenid@</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Ingrese Usuario:</label>
          <input
            type="text"
            value={userData.username}
            name="username"
            placeholder="Ingrese Usuario"
            onChange={handleInputChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label>Ingrese Contraseña:</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            placeholder="Ingrese Contraseña"
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <button>Ingresar</button>
      </form>
      <div className="registro">
        <Link to={REGISTER}>¿No estás registrado? Registrate Aquí</Link>
      </div>
    </Container>
  );
};

export default Login;
