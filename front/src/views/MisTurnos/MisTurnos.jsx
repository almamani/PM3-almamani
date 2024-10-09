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

  const handleCancelStatus = async (id) => {
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
                return (
                  <Turno
                    key={turno.id}
                    turno={turno}
                    handleCancelStatus={() => handleCancelStatus(turno.id)}
                  />
                );
              })}
        </div>
      </Container>
    </>
  );
};

export default MisTurnos;
