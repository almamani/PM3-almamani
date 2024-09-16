import { Request, Response, NextFunction } from "express";
import { UserModel } from "../config/data-source";
import { User } from "../entities/User";

const validateUserIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "El campo userId es obligatorio." });
  }

  const userExists: User | null = await UserModel.findOneBy({
    id: userId,
  });

  if (!userExists) {
    return res
      .status(404)
      .json({ message: `No existe usuario con el id ${userId}.` });
  }

  next();
};

export default validateUserIdMiddleware;
