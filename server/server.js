import Connection from "./database/db.js";
import cors from "cors";
import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(bodyParser.json());
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

Connection();
