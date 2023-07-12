import express from 'express'
import { Users } from '../models/user.js'
import { getAllUsers, getUserDetails, login, register } from '../controllers/user.js';

const router = express.Router();

router.get('/all', getAllUsers)

router.post('/login', login )

router.post('/register', register )

router.get('/userid/:id', getUserDetails)

export default router;