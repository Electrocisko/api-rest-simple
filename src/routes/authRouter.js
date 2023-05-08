import express from 'express';
import {loginUser, registerUser, registerForm, checkCount, loginForm} from '../controlers/authControler.js';


const router = express.Router();

router.get('/register', registerForm);
router.post('/register', registerUser);
router.get('/login', loginForm);
router.get('/checkCount/:token', checkCount);
router.post('/login', loginUser )


export default router;