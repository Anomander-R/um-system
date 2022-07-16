import express from 'express';
const app = express();
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import template from './template';
import userRoutes from "./routes/user.routes";

/* Configure Express  */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/", userRoutes);
app.get("/", (req, res) => {
    res.status(200).send(template());
  });


export default app;