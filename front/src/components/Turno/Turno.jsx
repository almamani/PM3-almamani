import { Container } from "./styled";

const Turno = ({ turno: { id, date, time, status }, handleCancelStatus }) => {
  return (
    <>
      <Container>
        <h3>Id Turno: {id}</h3>
        <h3>Fecha: {date}</h3>
        <h4>Hora: {time}</h4>
        <p>Estado: {status === "cancelled" ? "Cancelado" : "Activo"}</p>
        <button onClick={handleCancelStatus} disabled={status === "cancelled"}>
          {status === "cancelled" ? "Turno Cancelado" : "Cancelar Turno"}
        </button>
      </Container>
    </>
  );
};

export default Turno;
