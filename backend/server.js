
import dotenv from "dotenv"
import { app } from "./app.js"
import connectToDb from "./db/index.js"

dotenv.config()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
    connectToDb();
})
