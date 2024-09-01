import { Request, Response } from "express";

export const getAppointmentsController = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Obtener el listado de todos los turnos de todos los usuarios",
  });
};

export const getAppointmentController = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Obtener el detalle de un turno específico" });
};

export const scheduleAppointmentController = (req: Request, res: Response) => {
  res.status(200).json({ message: "Agendar un nuevo turno" });
};

export const cancelAppointmentController = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Cambiar el estatus de un turno a cancelled" });
};
