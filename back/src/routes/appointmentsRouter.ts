import { Router } from "express";
import {
  cancelAppointmentController,
  getByIdAppointmentController,
  getAppointmentsController,
  scheduleAppointmentController,
} from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAppointmentsController);
appointmentsRouter.get("/:id", getByIdAppointmentController);
appointmentsRouter.post("/schedule", scheduleAppointmentController);
appointmentsRouter.put("/cancel", cancelAppointmentController);

export default appointmentsRouter;
