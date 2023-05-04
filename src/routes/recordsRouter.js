import express from 'express';
const router = express.Router();

router.get('/records', (req, res) => {
    res.send('Aguante Maiden!!')
})



export default router;