import express from 'express';
import auth from './Auth.js';
import task from './Task.js';

var router = express.Router();
router.use('/auth', auth);
router.use('/tasks', task);

export default router;
