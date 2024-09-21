import { Job, Worker } from "bullmq";
import SampleJob from "../jobs/SampleJob";
import redisConnection from "../config/redisConfig";

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
      console.log("Sample job worker kicking", job);
      if (job.name === "SampleJob") {
        console.log("Inside");
        const sampleJobInstance = new SampleJob(job.data);

        sampleJobInstance.handle(job);
        return true;
      }
    },
    {
      connection: redisConnection,
    }
  );
}
