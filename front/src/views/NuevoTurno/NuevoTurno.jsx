import { Container } from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MY_APPOIMENTS } from "../../helpers/pathsRoutes";
import { useNewAppointmentMutation } from "../../redux/appointmentsApi";
import { useUserAppointmentsQuery } from "../../redux/usersApi";
import { validateNuevoTurno } from "../../helpers/validateNuevoTurno";

import { useSelector } from "react-redux";

const NuevoTurno = () => {
  const navigate = useNavigate();
  const userLogged = useSelector((state) => state.userSlice.user.id);

  const { refetch } = useUserAppointmentsQuery(userLogged);

  const [turno, setTurno] = useState({
    date: "",
    time: "",
    userId: userLogged,
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
  });

  const [newAppointment] = useNewAppointmentMutation();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTurno({ ...turno, [name]: value });

    setErrors(validateNuevoTurno({ ...turno, [name]: value }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateNuevoTurno(turno, true);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        await newAppointment(turno);
        refetch();
        navigate(MY_APPOIMENTS);
      } catch (error) {
        alert("Error al crear turno", error);
      }
    }
  };

  const obtenerHoraActual = () => {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    return `${horas}:${minutos}`;
  };

  const esHoy = (fechaSeleccionada) => {
    const hoy = new Date().toISOString().split("T")[0];
    return fechaSeleccionada === hoy;
  };

  return (
    <Container>
      <h1>Nuevo Turno</h1>
      <h2>Horario de Atención: Lunes a Viernes - 10:00 a 18:00 hs</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            value={turno.date}
            name="date"
            onChange={handleInputChange}
            min={new Date().toISOString().split("T")[0]} // Mínimo es la fecha actual
          />
          {errors.date && <p>{errors.date}</p>}
        </div>

        <div>
          <label>Hora:</label>
          <input
            type="time"
            value={turno.time}
            name="time"
            onChange={handleInputChange}
            min={esHoy(turno.date) ? obtenerHoraActual() : "00:00"}
          />
          {errors.time && <p>{errors.time}</p>}
        </div>

        <button>Registrar Turno</button>
      </form>
    </Container>
  );
};

export default NuevoTurno;
