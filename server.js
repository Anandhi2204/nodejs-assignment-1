const express =require("express");
const app = express();
const path = require("path");
app.get("/travel",(req,res)=>{
    res.sendFile(path.join(__dirname,"travel.html"));
})
app.get("/food",(req,res)=>{
    res.sendFile(path.join(__dirname,"food.html"));
})
app.get("/guide",(req,res)=>{
    res.sendFile(path.join(__dirname,"guide.html"));
})
app.listen(3978,()=>{
    console.log("server is running");
})