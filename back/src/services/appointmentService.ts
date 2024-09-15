import { Appointment } from "../entities/Appointment";
import createAppointmentDto from "../dto/createAppointmentDto";
import { AppointmentModel } from "../config/data-source";
import { UserModel } from "../config/data-source";
import { statusEnum } from "../enums/statusEnum";

const getAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentModel.find();
  return appointments;
};

const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const appointment = await AppointmentModel.findOneBy({ id });
  return appointment;
};

const scheduleAppointmentService = async (
  appointmentData: createAppointmentDto
): Promise<Appointment> => {
  const newAppointment = await AppointmentModel.create(appointmentData);
  await AppointmentModel.save(newAppointment);

  const user = await UserModel.findOneBy({ id: appointmentData.userId });

  if (user) {
    newAppointment.user = user;
    AppointmentModel.save(newAppointment);
  }

  return newAppointment;
};

const cancelAppointmentService = async (
  id: number
): Promise<Appointment | null> => {
  const appointment = await getAppointmentByIdService(id);

  if (appointment) {
    appointment.status = statusEnum.CANCELLED;
    await AppointmentModel.save(appointment);
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
