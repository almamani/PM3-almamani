import { Request, Response } from "express";

const getAppointmentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({
    message: "Obtener el listado de todos los turnos de todos los usuarios",
  });
};

const getByIdAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  return res
    .status(200)
    .json({ message: `Obtener el detalle del turno con el Id: ${id}` });
};

const scheduleAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: "Agendar un nuevo turno" });
};

const cancelAppointmentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "Cambiar el estatus de un turno a cancelled" });
};

export {
  cancelAppointmentController,
  getByIdAppointmentController,
  getAppointmentsController,
  scheduleAppointmentController,
};
