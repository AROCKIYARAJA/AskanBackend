import express from "express";
import { CardModel } from "../Model/CardModel.js";


export const GetCoffeeInfo = async (req, res) => {
    try {
        const AllPost = await CardModel.find();
        res.status(200).json({ success: true, message: "Data fetching Successfully completed", results: AllPost })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const CreateCoffeeInfo = async (req, res) => {
    try {
        const { image, title, review, rating, description, rate, region } = req.body;
        await CardModel.create({ image: image, title: title, review: review, rating: rating, description: description, rate: rate, region: region })
        res.status(200).json({ success: true, message: "Data fetching Successfully completed" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
