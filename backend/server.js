import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})

// mongodb+srv://pranab4752:J2kQ4iQm40qkp96L@cluster0.eacvmx7.mongodb.net/?