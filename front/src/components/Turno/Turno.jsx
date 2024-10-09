import { Container, Estado } from "./styled";

const Turno = ({ turno: { id, date, time, status }, handleCancelStatus }) => {
  return (
    <>
      <Container>
        <h3>Fecha: {date}</h3>
        <h3>Hora: {time}</h3>
        <Estado $status={status}>
          Estado: {status === "cancelled" ? "Cancelado" : "Activo"}
        </Estado>
        <button onClick={handleCancelStatus} disabled={status === "cancelled"}>
          {status === "cancelled" ? "Turno Cancelado" : "Cancelar Turno"}
        </button>
      </Container>
    </>
  );
};

export default Turno;
