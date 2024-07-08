import path from "path";
import dotenv from "dotenv"
import { app } from "./app.js"
import connectToDb from "./db/index.js"
import express from "express"

dotenv.config()
const __dirname = path.resolve();


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/Clinic-Frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "Clinic-Frontend", "dist", "index.html"));
    });
}
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
    connectToDb();
})
