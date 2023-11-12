const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    process.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// using try catch
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req,res,next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
