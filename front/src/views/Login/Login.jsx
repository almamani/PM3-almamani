import { Container } from "./styled";
import { useState } from "react";
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { HOME, REGISTER } from "../../helpers/pathsRoutes";

const Login = () => {
  const navigate = useNavigate();

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
        const user = await axios.post(
          "http://localhost:3000/users/login",
          userData
        );
        navigate(HOME);
        //A GUARDAR LOS DATOS DEL USUARIO EN EL GLOBAL
        console.log(user.data.user);
      } catch (error) {
        alert("Usuario y/o Contraseña Incorrectos", error);
      }
    }
  };

  return (
    <Container>
      <h1>Registro de Turnos - Bienvenid@</h1>
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
