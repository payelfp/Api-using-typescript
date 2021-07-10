import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import mongoose from "mongoose";
dotenv.config();
const app = express();


mongoose.connect(
    process.env.MONGO_URL as string,{
        useUnifiedTopology:true,
        useNewUrlParser: true,
    },
    ()=>{
        console.log("DB Connected");
    }
);

app.use(express.json())
app.use(express.urlencoded({extended :false}))
app.use("/",router)



app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
});