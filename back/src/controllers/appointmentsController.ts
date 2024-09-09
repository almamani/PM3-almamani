import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import {
  getAppointmentsService,
  getAppointmentByIdService,
  scheduleAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentService";

const getAppointmentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const appointments: IAppointment[] = await getAppointmentsService();
  return res
    .status(201)
    .json({ message: "El listado de Turnos es:", data: appointments });
};

const getByIdAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id, 10);
  const appointment = await getAppointmentByIdService(id);

  if (appointment) {
    return res
      .status(200)
      .json({ message: "Turno encontrado", data: appointment });
  } else {
    return res.status(404).json({ message: "Turno no encontrado" });
  }
};

const scheduleAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { date, time, userId, status } = req.body;
  const newAppointment: IAppointment = await scheduleAppointmentService({
    date,
    time,
    userId,
    status,
  });
  return res
    .status(201)
    .json({ message: "Turno Generado con Exito", data: newAppointment });
};

const cancelAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.body;
  const updatedAppointment = await cancelAppointmentService(id);
  if (updatedAppointment) {
    return res.status(200).json({
      message: "Turno cancelado con éxito.",
      data: updatedAppointment,
    });
  } else {
    return res.status(404).json({ message: "Turno no encontrado." });
  }
};

export {
  getAppointmentsController,
  getByIdAppointmentController,
  scheduleAppointmentController,
  cancelAppointmentController,
};
