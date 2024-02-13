import express from 'express'
const router = express.Router();
import {sendMessage,receiveMessage} from '../controllers/message.controllers.js'
import protectRoutes from '../middlewares/protectRoutes.js';



router.get('/receive/:id',protectRoutes,receiveMessage)
router.post('/send/:id',protectRoutes, sendMessage)

export default router;