import express from "express";
import { CreateCoffeeInfo, GetCoffeeInfo } from "../Controller/CardCTRL.js";

export const CardRouter = express.Router();
CardRouter.get("/AllPost", GetCoffeeInfo);
CardRouter.post("/CreateCard", CreateCoffeeInfo)