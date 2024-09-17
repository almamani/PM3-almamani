import { Router } from "express";
import {
  createUserController,
  getUserByIdController,
  getAllUsersController,
  loginUserController,
} from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getAllUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", createUserController);
usersRouter.post("/login", loginUserController);

export default usersRouter;
