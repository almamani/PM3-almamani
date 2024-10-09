import { useState } from "react";
import { useNewAppointmentMutation } from "../../redux/features/appointments/appointmentsApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserAppointmentsQuery } from "../../redux/features/users/usersApi";

const NewAppointmentForm = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.usersSlice.user);

  const { refetch } = useUserAppointmentsQuery(user.id);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    userId: user.id,
  });

  const [newAppointment] = useNewAppointmentMutation();

  const submitForm = async (e) => {
    e.preventDefault();

    const newApp = await newAppointment(appointment);
    console.log(user);

    refetch();
    navigate("/mis-turnos");

    if (newApp.error) {
      console.log(newApp.error);
      alert("Error al crear turno");
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={(e) =>
              setAppointment({ ...appointment, date: e.target.value })
            }
          />
        </div>

        <div>
          <label>Hora</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={(e) =>
              setAppointment({ ...appointment, time: e.target.value })
            }
          />
        </div>
        <button type="submit">Solicitar turno</button>
      </form>
    </>
  );
};

export default NewAppointmentForm;
