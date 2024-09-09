import { Router } from "express";
import {
  createCredentialController,
  getCredentialsController,
  validateCredentialsControler,
} from "../controllers/credentialsController";

const credentialRouter: Router = Router();

credentialRouter.post("/", createCredentialController);
credentialRouter.post("/login", validateCredentialsControler);
credentialRouter.get("/", getCredentialsController);

export default credentialRouter;
