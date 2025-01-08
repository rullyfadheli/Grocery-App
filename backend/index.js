const express = require("express");
const app = express();
const router = require("./router/route");
const logRequest = require("./middleware/log");
require("dotenv").config();

app.use(express.json());
app.use(logRequest);
app.use("/", router);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => console.log(`The server is running at PORT ${PORT}`));
