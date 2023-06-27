require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { db } = require("./configs");
const errors = require("./misc/errors");

const app = express();

app.use(cors(options));
app.use(express.json());
app.use(cookieParser());

const routes = require("./routes");

app.use(routes(db));

app.use((_, _, next) => {
  next(errors[404]);
});

app.listen(process.env.PORT, () =>
  console.info(`> listening at: ${process.env.PORT}`)
);
