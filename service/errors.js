module.exports = (err, req, res, next) => {
  err.status = err.status || 500;
  (err.message = err.message),
    res.status(err.status).json({
      err,
      message: err.message,
      stack: err.stack,
    });
};
