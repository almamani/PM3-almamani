import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";
import credentialRouter from "./credentialsRouter";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/appointments", appointmentsRouter);
router.use("/credentials", credentialRouter);

export default router;
