import express from "express";
import cors from "cors";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
const app = express();
const PORT = 8000;
Connection();
app.use(cors());
app.use("/", Route);
app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
