import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import receiptionistRouter from "./routes/receiptionist.routes.js"
import doctorRouter from "./routes/doctor.routes.js"

const app = express()

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use(cookieParser());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/users/receptionist", receiptionistRouter);
app.use("/api/v1/users/doctor", doctorRouter);

export { app }

