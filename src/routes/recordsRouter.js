import express from 'express';
const router = express.Router();
import {getRecords, createRecord, getRecordById, getRecordByCategory, createRecords} from '../controlers/recordsControler.js'


router.get('/records', getRecords );
router.post('/records', createRecord);
router.get('/record/:id',getRecordById );
router.get('/recordsByCat', getRecordByCategory);
router.post('/manyRecords', createRecords)

export default router;