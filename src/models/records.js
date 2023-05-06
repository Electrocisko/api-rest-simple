import mongoose from "mongoose";

const recordsCollection = 'records';

const RecordsSchema = new mongoose.Schema({
    name: String,
    category: String,
    release: String,
    recorded: String,
    imageUrl: String
})

export const discosmaiden = mongoose.model(recordsCollection, RecordsSchema);