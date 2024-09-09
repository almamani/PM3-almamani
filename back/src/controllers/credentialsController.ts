import { Request, Response } from "express";
import ICredential from "../interfaces/ICredential";
import {
  createCredentialService,
  getCredentialService,
  validateCredentialsService,
} from "../services/credentialsService";

const createCredentialController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newCredentialId: number = await createCredentialService({
    username,
    password,
  });
  res.status(201).json({
    message: "Credencial generada con exito con id:",
    data: newCredentialId,
  });
};

const getCredentialsController = async (req: Request, res: Response) => {
  const credentials: ICredential[] = await getCredentialService();
  res
    .status(201)
    .json({ message: "El listado de credenciales es:", data: credentials });
};

const validateCredentialsControler = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const userId: number = await validateCredentialsService(username, password);
  if (userId === 0) {
    res.status(404).json({ message: "Usuario no encontrado" });
  } else if (userId === -1) {
    res.status(401).json({ message: "Password Incorrecto" });
  } else {
    res
      .status(200)
      .json({ message: "Validación Correcta el id es:", Data: userId });
  }
};

export {
  createCredentialController,
  getCredentialsController,
  validateCredentialsControler,
};
