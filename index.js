import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { CardRouter } from "./View/CardRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/AskanTech", CardRouter)

mongoose.connect(`mongodb+srv://mongodbaccess:mongodbaccess@arockiyaraja.6ottvpg.mongodb.net/AskanTech?retryWrites=true&w=majority&appName=arockiyaraja`).then(() => {
    app.listen(5000, () => console.log("server is running"))
}).catch(err => console.log(err.message))