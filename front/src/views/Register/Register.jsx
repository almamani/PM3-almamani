import axios from "axios";
import { Container } from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateRegister } from "../../helpers/validateRegister";
import { SLASH } from "../../helpers/pathsRoutes";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    repeatedPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    repeatedPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validateRegister({ ...userData, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateRegister(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const { repeatedPassword, ...dataToSend } = userData;

      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          dataToSend
        );
        console.log("Respuesta del servidor:", response.data);

        alert("Usuario registrado con éxito!");

        setUserData({
          name: "",
          email: "",
          birthdate: "",
          nDni: "",
          username: "",
          password: "",
          repeatedPassword: "",
        });
      } catch (error) {
        if (error.response) {
          const errorMessage =
            error.response.data.message || "Error del servidor";
          alert(`Error: ${errorMessage} (Código: ${error.response.status})`);
        } else if (error.request) {
          alert("Error: No se recibió una respuesta del servidor.");
        } else {
          alert(`Error: ${error.message}`);
        }
      }
    }
  };

  return (
    <Container>
      <h1>Registro de Pacientes</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Nombre y Apellido:</label>
          <input
            type="text"
            value={userData.name}
            name="name"
            placeholder="Ingrese Nombre y Apellido"
            onChange={handleInputChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={userData.email}
            name="email"
            placeholder="example@gmail.com"
            onChange={handleInputChange}
            size="10"
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            value={userData.birthdate}
            name="birthdate"
            onChange={handleInputChange}
          />
          {errors.birthdate && <p>{errors.birthdate}</p>}
        </div>
        <div>
          <label>Nro de Documento:</label>
          <input
            type="text"
            value={userData.nDni}
            name="nDni"
            placeholder="Ingrese solo números"
            onChange={handleInputChange}
          />
          {errors.nDni && <p>{errors.nDni}</p>}
        </div>
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
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            placeholder="Ingrese Contraseña"
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label>Repetir Contraseña:</label>
          <input
            type="password"
            value={userData.repeatedPassword}
            name="repeatedPassword"
            placeholder="Repetir Contraseña"
            onChange={handleInputChange}
          />
          {errors.repeatedPassword && <p>{errors.repeatedPassword}</p>}
        </div>
        <button>Registrarse</button>
      </form>
      <div className="login">
        <Link to={SLASH}>¿Ya estás registrado? Inicia Sesión</Link>
      </div>
    </Container>
  );
};

export default Register;
