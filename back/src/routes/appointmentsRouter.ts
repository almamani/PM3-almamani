import { Router } from "express";
import {
  cancelAppointmentController,
  getByIdAppointmentController,
  getAppointmentsController,
  scheduleAppointmentController,
} from "../controllers/appointmentsController";

import validateUserIdMiddleware from "../middlewares/validateUser";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getByIdAppointmentController);
appointmentsRouter.post(
  "/schedule",
  validateUserIdMiddleware,
  scheduleAppointmentController
);
appointmentsRouter.put("/cancel", cancelAppointmentController);

export default appointmentsRouter;
