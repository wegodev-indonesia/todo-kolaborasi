import express from 'express';
import auth from './Auth.js';

var router = express.Router();
router.use('/auth', auth);

export default router;
