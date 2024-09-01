import { Router } from "express";
import {
  createUserController,
  getUserByIdController,
  getUsersController,
  loginUserController,
} from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getUsersController);
usersRouter.get("/:id", getUserByIdController);
usersRouter.post("/register", createUserController);
usersRouter.post("/login", loginUserController);

export default usersRouter;
