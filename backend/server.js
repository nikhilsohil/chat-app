import express from 'express';

const app = express();



app.use(express.json());
app.get('/',(req, res) => {
    res.send("Hello World");
})



const port= 5000
app.listen(port,()=>{
    console.log("server listening http://localhost:"+port);
});