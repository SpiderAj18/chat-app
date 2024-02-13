import express from 'express'
const router = express.Router()
import { loginUser,registerUser,logoutUser } from '../controllers/auth.controllers.js'

router.post('/login',loginUser)
router.post('/signup',registerUser)
router.post('/logout',logoutUser)



export default router
