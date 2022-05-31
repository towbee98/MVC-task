const express = require("express");
const connectDatabase = require("./engines/database");
const apiV1 = require("./route/");
const globalErrorHandler = require("./service/errors");
const AppError = require("./utils/ErrorHandler");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.use("/api", apiV1);

app.use((req, res, next) => {
  // const error = new Error();
  // error.name = "Not Found";
  // error.status = 404;
  // error.message = "Route not found, please try a valid endpoint";
  next(new AppError("Route not found, please try a valid endpoint", 404));
});

app.use(globalErrorHandler);

connectDatabase(() => {
  app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`);
  });
});
