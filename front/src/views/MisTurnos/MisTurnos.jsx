import { Container } from "./styled";
import axios from "axios";

import { useState, useEffect } from "react";
import Turno from "../../components/Turno/Turno";

const MisTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/appointments")
      .then((response) => {
        const orderDate = response.data.appointments.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        setTurnos(orderDate);
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage =
            error.response.data.message || "Error del servidor";
          alert(`Error: ${errorMessage} (Código: ${error.response.status})`);
        } else if (error.request) {
          alert("Error: No se recibió una respuesta del servidor.");
        } else {
          alert(`Error: ${error.message}`);
        }
      });

    return () => setTurnos([]);
  }, [flag]);

  const handleCancelStatus = async (id) => {
    try {
      await axios.put(`http://localhost:3000/appointments/cancel`, { id });
      setFlag(!flag);
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
  };

  return (
    <>
      <Container>
        <h1>MisTurnos</h1>
        <div className="containerTurnos">
          {turnos.map((turno) => {
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
