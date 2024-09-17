import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  createUserService,
} from "../services/usersService";
import { validateCredentialsService } from "../services/credentialsService";
import { User } from "../entities/User";

const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users: User[] = await getAllUsersService();
    return res
      .status(201)
      .json({ message: "El listado de usuarios es:", data: users });
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await getUserByIdService(id);

    if (user) {
      return res
        .status(200)
        .json({ message: "Usuario fue encontrado", user: user });
    } else {
      return res.status(404).json({ message: "Usuario no fue encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
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
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: "Datos incompletos" });

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
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor", error });
  }
};

export {
  createUserController,
  getUserByIdController,
  getAllUsersController,
  loginUserController,
};
