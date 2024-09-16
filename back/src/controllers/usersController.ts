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
    return res
      .status(200)
      .json({ message: "Usuario fue encontrado", user: user });
  } else {
    return res.status(404).json({ message: "Usuario no fue encontrado" });
  }
};

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { name, email, birthdate, nDni, username, password } = req.body;

  if (!name || !email || !birthdate || !nDni || !username || !password) {
    return res.status(400).json({ message: "Los datos son incorrectos" });
  }

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
    .json({ message: "Usuario Creado con Exito", user: newUser });
};

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { username, password } = req.body;
  const user: User | null = await validateCredentialsService(
    username,
    password
  );
  if (user) {
    return res.status(200).json({
      login: true,
      user: user,
    });
  } else return res.status(400).json({ message: "Datos Incorrectos" });
};

export {
  createUserController,
  getUserByIdController,
  getUsersController,
  loginUserController,
};
