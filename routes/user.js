import express from 'express'
import { getMyProfile, login, logout, register } from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get('/logout', logout)

router.post('/login', login )

router.post('/register', register )

router.get('/me',isAuthenticated, getMyProfile)

export default router;