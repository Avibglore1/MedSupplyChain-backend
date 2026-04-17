import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/health", (req,res)=>{
    res.status(200).json({
        status: "ok",
        message: "Server is running"
    })
});

app.use("/api/auth", authRoutes);

export default app