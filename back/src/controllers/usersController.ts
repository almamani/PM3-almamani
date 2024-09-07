import { Request, Response } from "express";

const getUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res
    .status(200)
    .json({ message: "Obtener el listado de todos los usuarios" });
};

const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  return res
    .status(200)
    .json({ message: `Obtener el detalle del usuario con el ${id}` });
};

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: "Registro de un Nuevo Usuario" });
};

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json({ message: "Login del usuario a la aplicación" });
};

export {
  createUserController,
  getUserByIdController,
  getUsersController,
  loginUserController,
};
