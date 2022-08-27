import express from "express";
import { register, login, refreshToken } from '../controllers/AuthController.js';
var router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

export default router;