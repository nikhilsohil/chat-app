import mongoose from "mongoose";
import 'dotenv/config'

const url=process.env.DATABASE_URL+`mydatabase`;


 const DB_connect=async()=> {
    try{
        const conn=await mongoose.connect(url);
         console.log(`\n☘️  MongoDB Connected! Db host: ${conn.connection.host}:${conn.connection.port}\n` );
     }
     catch(err){
         console.log("Failed to connect to MongoDB"+err.message +"\n");
         return err.message;
     }
}



export default DB_connect;