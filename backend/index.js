import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Utils/db.js";
dotenv.config({});

const app = express();

// app.get("/home",(req,res)=> {
//     return res.status(200).json({
//         message:"Hello World",
//         success:true
//     })
// });

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin: 'http//locahost:5173',
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen (PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
});