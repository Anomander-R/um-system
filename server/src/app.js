import express from 'express';
const app = express();
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

/* Configure Express  */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compress());
app.use(helmet());
app.use(cors());

export default app;