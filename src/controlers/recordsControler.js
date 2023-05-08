import {discosmaiden} from '../models/records.js';
import {isValidObjectId} from 'mongoose';

const getRecords = async (req,res) => {
    try {
        const records = await discosmaiden.find().lean();
        res.status(200).json(records)
    } catch (error) {
        console.log(error)
    }
}

const createRecord = async (req,res) => {
    let newRecord = req.body;
    try {
        let data = await  discosmaiden.create(newRecord);
        res.status(201).json({
            status: "success",
            data
        })
    } catch (error) {
        res.json({
            status: "error",
            error: error
        })
    }
}

const getRecordById = async (req,res) => {
    try {
        const id = req.params.id;
        if (!isValidObjectId(id)) {
            return res.status(404).json({
                status: "error",
                message: "Id no valido"
            })
        } 
        const data = await discosmaiden.findById(id)
        res.status(200).json({
            status: "success",
            data
        })
    } catch (error) {
        res.json({
            status: "error",
            error: error
        })
    }
}

const getRecordByCategory = async(req,res) => {
    try {
        const cat = req.query.cat
        const data = await discosmaiden.find({"category": cat})
         res.json({
             status: "success",
             data
         })
    } catch (error) {
        res.json({
            status: "error",
            error: error
        })
    }

  
}

const createRecords = async (req,res) => {
    let newRecords = req.body;
    try {
        let data = await  discosmaiden.insertMany(newRecords);
        res.status(201).json({
            status: "success",
            data
        })
    } catch (error) {
        res.json({
            status: "error",
            error: error
        })
    }
}

export {
    getRecords,
    createRecord,
    getRecordById,
    getRecordByCategory,
    createRecords
}
