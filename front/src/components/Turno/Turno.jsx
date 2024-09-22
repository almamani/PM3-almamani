import { Container } from "./styled";

const Turno = ({ turno: { id, date, time, status } }) => {
  return (
    <>
      <Container>
        <h3>Id Turno: {id}</h3>
        <h3>Fecha: {date}</h3>
        <h4>Hora: {time}</h4>
        <p>Estado: {status}</p>
      </Container>
    </>
  );
};

export default Turno;
