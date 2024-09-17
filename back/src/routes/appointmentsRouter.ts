import { Router } from "express";
import {
  cancelAppointmentController,
  getByIdAppointmentController,
  getAllAppointmentsController,
  scheduleAppointmentController,
} from "../controllers/appointmentsController";

import validateUserIdMiddleware from "../middlewares/validateUser";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllAppointmentsController);
appointmentsRouter.get("/:id", getByIdAppointmentController);
appointmentsRouter.post(
  "/schedule",
  validateUserIdMiddleware,
  scheduleAppointmentController
);
appointmentsRouter.put("/cancel", cancelAppointmentController);

export default appointmentsRouter;
