import { Request, Response } from "express";
import { Appointment } from "../entities/Appointment";
import {
  getAllAppointmentsService,
  getAppointmentByIdService,
  scheduleAppointmentService,
  cancelAppointmentService,
} from "../services/appointmentService";

const getAllAppointmentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const appointments: Appointment[] = await getAllAppointmentsService();
    if (appointments.length !== 0) {
      return res.status(200).json({
        message: "El listado de Turnos es:",
        appointments: appointments,
      });
    } else {
      return res.status(404).json({ message: "No se encontraron turnos" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

const getByIdAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id, 10);
    const appointment = await getAppointmentByIdService(id);
    if (appointment) {
      return res
        .status(200)
        .json({ message: "Turno encontrado", appointment: appointment });
    } else {
      return res.status(404).json({ message: "Turno no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

const scheduleAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { date, time, userId } = req.body;
    if (!date || !time || !userId) {
      return res.status(400).json({ message: "Los datos son incorrectos" });
    }
    const newAppointment: Appointment = await scheduleAppointmentService({
      date,
      time,
      userId,
    });
    return res
      .status(201)
      .json({ message: "Turno Generado con Exito", data: newAppointment });
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

const cancelAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

export {
  getAllAppointmentsController,
  getByIdAppointmentController,
  scheduleAppointmentController,
  cancelAppointmentController,
};
