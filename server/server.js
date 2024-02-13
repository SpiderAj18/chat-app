//package imports
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';


//file imports 
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectdb from './db/db.js';

//app and env declaration 
const app = express();
dotenv.config()

const PORT = process.env.PORT || 5050;

//middlewares
app.use(express.json()) //to parse the incomming requests with json payloads 
app.use(cookieParser());

//routes
app.use('/api/auth',authRoutes);
app.use('/api/message',messageRoutes);
app.use('/api/user',userRoutes);


// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })





app.listen(PORT,()=>{
    connectdb();
    return console.log(`Server is running ${PORT}`)});