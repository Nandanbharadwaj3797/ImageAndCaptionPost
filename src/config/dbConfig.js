// server->ODM ->database

import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";
export default async function connectDB(){
    try{
        await mongoose.connect(DB_URL);
        console.log("connected to moongoose");
    }catch(error){
        console.log("something went wrong while connecting to mongode Db ");
        console.log(error);
    }
}