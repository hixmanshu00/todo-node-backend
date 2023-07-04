import express from 'express'
import { Users } from '../models/user.js'
import { getUser, getUserbyId, newUser } from '../controllers/user.js';

const router = express.Router();

router.get('/all', getUser)

router.post('/new', newUser )

router.get('/userid/:id', getUserbyId)

export default router;