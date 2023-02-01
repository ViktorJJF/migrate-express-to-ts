import { Response, Request } from "express";
import express from "express";

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/ping", (req: Request, res: Response): void => {
  res.send("pong");
});

app.use("/api", require("./routes/api"));

app.get("/", (req: Request, res: Response): void => {
  res.send({ ok: true, msg: "Andando... nice!, goodxd!" });
});

export default app;
