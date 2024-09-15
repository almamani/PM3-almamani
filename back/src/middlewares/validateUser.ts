/* import { Request, Response, NextFunction } from "express";
import { users } from "../services/usersService"; // Asumiendo que aquí está tu array de usuarios

const validateUserIdMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "El campo userId es obligatorio." });
  }

  const userExists = users.some((user) => user.id === userId);

  if (!userExists) {
    return res
      .status(404)
      .json({ message: `No existe usuario con el id ${userId}.` });
  }

  next();
};

export default validateUserIdMiddleware;
 */
