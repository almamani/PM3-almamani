import IAppointment from "../interfaces/IAppointment";
import IAppointmentDto from "../dto/IAppointmentDto";

let appointments: IAppointment[] = [];

let id: number = 111;

const getAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointments;
};

const getAppointmentByIdService = async (
  appointmenId: number
): Promise<IAppointment | undefined> => {
  const appointment = appointments.find((app) => app.id === appointmenId);
  return appointment;
};

const scheduleAppointmentService = async (
  appointmentData: IAppointmentDto
): Promise<IAppointment> => {
  const newAppointment: IAppointment = {
    id,
    date: appointmentData.date,
    time: appointmentData.time,
    userId: appointmentData.userId,
    status: appointmentData.status,
  };
  appointments.push(newAppointment);
  id++;
  return newAppointment;
};

const cancelAppointmentService = async (
  appointmentId: number
): Promise<IAppointment | null> => {
  const appointment = appointments.find((app) => app.id === appointmentId);

  if (appointment) {
    appointment.status = "cancelled";
    return appointment;
  } else {
    return null;
  }
};

export {
  getAppointmentsService,
  getAppointmentByIdService,
  scheduleAppointmentService,
  cancelAppointmentService,
};
