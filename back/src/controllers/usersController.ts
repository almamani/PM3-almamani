import { Request, Response } from "express";
import {
  getUsersService,
  getUserByIdService,
  createUserService,
} from "../services/usersService";
import { validateCredentialsService } from "../services/credentialsService";
import { User } from "../entities/User";

const getUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: User[] = await getUsersService();
  return res
    .status(201)
    .json({ message: "El listado de usuarios es:", data: users });
};

const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = parseInt(req.params.id, 10);
  const user = await getUserByIdService(id);

  if (user) {
    return res.status(200).json({ message: "Usuario encontrado", data: user });
  } else {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
};

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  const newUser: User = await createUserService({
    name,
    email,
    birthdate,
    nDni,
    username,
    password,
  });
  return res
    .status(201)
    .json({ message: "Usuario Creado con Exito", data: newUser });
};

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, password } = req.body;
  const userId: number = await validateCredentialsService(username, password);
  if (userId === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  } else if (userId === -1) {
    return res.status(401).json({ message: "Password Incorrecto" });
  } else {
    return res.status(200).json({
      message: "Validación Correcta",
      "Id Credenciales Usuario Logueado": userId,
    });
  }
};

export {
  createUserController,
  getUserByIdController,
  getUsersController,
  loginUserController,
};
