const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: "f1747dc5c6ff4adebd5c198a9f3b220e",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
  rollbar.info("Html was monitered successfully!");
});

const port = process.env.PORT || 4000;

app.use(rollbar.errorHandler());

app.listen(port, () => console.log(`Hello, there! : ${port}`));
