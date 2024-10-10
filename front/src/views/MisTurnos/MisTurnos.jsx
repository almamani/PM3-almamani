import { Container } from "./styled";
import { useUserAppointmentsQuery } from "../../redux/usersApi";
import { useCancelAppointmentMutation } from "../../redux/appointmentsApi";
import { useSelector } from "react-redux";

import Turno from "../../components/Turno/Turno";

const MisTurnos = () => {
  const userLogged = useSelector((state) => state.userSlice.user.id);
  const [cancelAppointment] = useCancelAppointmentMutation();

  const { data, isLoading, isError, refetch } =
    useUserAppointmentsQuery(userLogged);

  const calculoDifHoras = (fechaTurno) => {
    const fecha_HoraActual = new Date();
    const fecha_HoraTurno = new Date(fechaTurno);
    const diferenciaMilisegundos = fecha_HoraTurno - fecha_HoraActual;
    const diferenciaHoras = diferenciaMilisegundos / (1000 * 60 * 60);
    return diferenciaHoras;
  };

  const handleCancelStatus = async (id, date) => {
    const difHoras = calculoDifHoras(date);
    if (difHoras < 24) {
      alert("Solo se puede cancelar el turno hasta 24 horas antes ");
      return;
    }

    try {
      await cancelAppointment(id);
      refetch();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <Container>
        <h1>MisTurnos</h1>
        <div className="containerTurnos">
          {isLoading
            ? "Cargando Turnos..."
            : isError
            ? "Error al cargar los Turnos"
            : data.user.appointments.map((turno) => {
                const { date, id } = turno;

                return (
                  <Turno
                    key={id}
                    turno={turno}
                    handleCancelStatus={() => handleCancelStatus(id, date)}
                  />
                );
              })}
        </div>
      </Container>
    </>
  );
};

export default MisTurnos;
