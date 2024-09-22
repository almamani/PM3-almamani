import { Container } from "./styled";
import myAppointments from "../../helpers/myAppointments";
import { useState } from "react";
import Turno from "../../components/Turno/Turno";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState(myAppointments);

  console.log(turnos);

  return (
    <>
      <Container>
        <h1>MisTurnos</h1>
        <div className="containerTurnos">
          {turnos.map((turno) => {
            return <Turno key={turno.id} turno={turno} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default MisTurnos;
