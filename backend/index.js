const express = require("express");
const app = express();
const router = require("./router/route");
const cors = require("cors");
const logRequest = require("./middleware/log");
require("dotenv").config();

app.use(express.json());
app.use(logRequest);
app.use("/images", express.static("images"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api", router);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => console.log(`The server is running at PORT ${PORT}`));
