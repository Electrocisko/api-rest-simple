import express from 'express';
const router = express.Router();
import { discosmaiden } from '../models/records.js';


const disco = {
    name: "Maiden",
    release: "1981",
    recorded: "NO se",
    imageUrl: "url"
}





router.get('/records', async (req, res) => {
    try {
        const records = await discosmaiden.find().lean();
        res.json(records)
    } catch (error) {
        console.log(error)
    }
})



export default router;