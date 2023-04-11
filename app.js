const express=require("express");
const app=express();
require("dotenv").config();
app.use(express.json());
app.listen(process.env.PORT || 3900,()=>{
    console.log("done listen")
})