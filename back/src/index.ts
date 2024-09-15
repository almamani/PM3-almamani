import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { initializeDataSource } from "./config/data-source";

try {
  server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
  initializeDataSource();
} catch (error) {
  console.log(error);
}
