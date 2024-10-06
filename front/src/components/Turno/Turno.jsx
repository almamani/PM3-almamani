import { Container, Estado } from "./styled";

const Turno = ({ turno: { id, date, time, status }, handleCancelStatus }) => {
  const formattedDate = new Date(date).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <Container>
        <h3>Fecha: {formattedDate}</h3>
        <h3>Hora: {time}</h3>
        <Estado status={status}>
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
