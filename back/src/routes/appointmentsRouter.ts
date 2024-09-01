import { Router } from "express";
import {
  cancelAppointmentController,
  getAppointmentController,
  getAppointmentsController,
  scheduleAppointmentController,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getAppointmentController);
appointmentsRouter.post("/schedule", scheduleAppointmentController);
appointmentsRouter.put("/cancel", cancelAppointmentController);

export default appointmentsRouter;
