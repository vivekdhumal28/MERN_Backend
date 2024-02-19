class ApiError extends Error {
  constructor(
    // local variables
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    // overwride local vairbale
    super(message);
    this.statusCode = statusCode;
    this.data = null; //read about it
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      // getting complete error stack
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
