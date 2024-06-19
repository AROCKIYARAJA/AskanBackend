import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const CardStructure = new Schema({
    image: { type: String, require: true },
    title: { type: String },
    review: { type: Number },
    rating: { type: Number },
    description: { type: String },
    region: { type: String},
    rate: { type: Number }
}, { timestamps: true });

export const CardModel = models.CoffeeCards || model("CoffeeCards", CardStructure);