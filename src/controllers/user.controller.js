import { asyncHandler } from "../utils/asyncHandler.js";
// import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });

  // const { fullName, email, username, password } = req.body;
  // console.log("email", email);

  // if (fullName === "") {
  //   throw new ApiError(400, "fullName is required")
  // }
  // if (
  //   [fullName, email, username, password].some((field) => field?.trim() === "")
  // ) {
  //   throw new ApiError(400, "All fields are required");
  // }
});

export { registerUser };
