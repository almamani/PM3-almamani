import { Request, Response } from "express";

export const getUsersController = (req: Request, res: Response) => {
  res.status(200).json({ message: "Obtener el listado de todos los usuarios" });
};

export const getUserByIdController = (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Obtener el detalle de un usuario específico" });
};

export const createUserController = (req: Request, res: Response) => {
  res.status(200).json({ message: "Registro de un Nuevo Usuario" });
};

export const loginUserController = (req: Request, res: Response) => {
  res.status(200).json({ message: "Login del usuario a la aplicación" });
};
