const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const CsbInspector = require("csb-inspector");
const morganBody = require("morgan-body");
morganBody(app);

CsbInspector();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, console.log("SERVIDOR ENCENDIDO"));

module.exports = app;