import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors())  // without configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//setting before data, URL, JSON, FORM(body)

app.use(express.json({ limit: "16kb" }));
// url encoded
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// for static data like images, pdfs
app.use(express.static("public"));
// cookie-parser read and remove by server only
app.use(cookieParser());

// routes import (seggregation)
import userRouter from "./routes/user.routes.js";

// routes declaration  route, router
app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register

export { app };
