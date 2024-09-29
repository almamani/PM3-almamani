import { Container } from "./styled";
import { useState } from "react";
import { validateLogin } from "../../helpers/validateLogin";
import axios from "axios";

const Login = () => {
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

    // Validar campos vacíos y formato al enviar
    const validationErrors = validateLogin(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          userData
        );

        // Si el login es exitoso
        if (response.data.login) {
          alert("Usuario logueado correctamente");
        } else {
          alert("Error en usuario y/o Contraseña");
        }
      } catch (error) {
        // Verifica si el error es un 400 y muestra un mensaje específico
        if (error.response && error.response.status === 400) {
          alert("Error en usuario y/o Contraseña");
        } else {
          alert("Error en la solicitud, por favor intente más tarde");
        }
      }
    }
  };

  return (
    <Container>
      <h2>Formulario de Login</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={userData.username}
            name="username"
            placeholder="Ingrese Usuario"
            onChange={handleInputChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <br />
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            placeholder="********"
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <br />
        <button>Enviar</button>
      </form>
    </Container>
  );
};

export default Login;
