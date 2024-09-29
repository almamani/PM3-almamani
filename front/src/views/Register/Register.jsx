import { Container } from "./styled";
import { useState } from "react";
import { validateRegister } from "../../helpers/validateRegister";
import axios from "axios";
import DatePicker from "react-datepicker"; // Importamos react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importamos los estilos

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    birthdate: null, // Cambiamos a null para almacenar una fecha
    nDni: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validateRegister({ ...userData, [name]: value }));
  };

  // Manejamos el cambio de fecha con el DatePicker
  const handleDateChange = (date) => {
    setUserData({ ...userData, birthdate: date });
    setErrors(validateRegister({ ...userData, birthdate: date }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateRegister(userData, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Transformar la fecha al formato aaaa/mm/dd
      const birthdate = new Date(userData.birthdate);
      const formattedDate = `${birthdate.getFullYear()}/${String(
        birthdate.getMonth() + 1
      ).padStart(2, "0")}/${String(birthdate.getDate()).padStart(2, "0")}`;

      // Crear un objeto de datos que enviarás
      const dataToSend = {
        ...userData,
        birthdate: formattedDate,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/users/register",
          dataToSend
        );
        console.log("Respuesta del servidor:", response.data);

        alert("Usuario registrado con éxito!");

        // Limpiar el formulario
        setUserData({
          name: "",
          email: "",
          birthdate: "",
          nDni: "",
          username: "",
          password: "",
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
      <h2>Formulario de Registro</h2>
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
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          {/* Reemplazamos el input por el DatePicker */}
          <DatePicker
            selected={userData.birthdate} // La fecha seleccionada
            onChange={handleDateChange} // El manejador para el cambio de fecha
            dateFormat="dd/MM/yyyy" // Formato de la fecha
            placeholderText="Selecciona una fecha"
            maxDate={new Date()} // No permitir fechas futuras
            showMonthDropdown
            showYearDropdown // Desplegable para años
            scrollableYearDropdown // Hacer el desplegable de años scrollable
            yearDropdownItemNumber={100} // Mostrar un rango de 100 años
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
            placeholder="********"
            onChange={handleInputChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button>Enviar</button>
      </form>
      <br />
      <br />
    </Container>
  );
};

export default Register;
