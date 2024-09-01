import server from "./server";
import { PORT } from "./config/envs";
import router from "./routes/indexRouter";

server.use(router);

server.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
