/* eslint-disable no-process-env */
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const upload = multer();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(upload.none());

app.use("/api", routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});
