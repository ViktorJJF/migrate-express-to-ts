import { Response, Request } from "express";
const express = require("express");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api", require("./routes/api"));

app.get("/", (req: Request, res: Response): void => {
  res.send({ ok: true, msg: "Andando... nice!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
