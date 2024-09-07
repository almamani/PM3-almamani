import express from "express";
import morgan from "morgan";

import router from "./routes";

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(router);

export default server;
