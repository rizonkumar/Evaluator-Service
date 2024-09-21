import express, { Express } from "express";

import serverConfig from "./config/serverConfig";
import apiRouter from "./routes";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import SampleWorker from "./workers/sampleWorker";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at *: ${serverConfig.PORT}`);
  SampleWorker("SampleQueue");
  sampleQueueProducer("SampleJob", {
    name: "Rizon Kumar Rahi",
    company: "Merkle Inspire",
    position: "Software Engineer",
    location: "Remote | BLR",
  });
});
