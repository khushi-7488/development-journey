const express = require("express");
const app = express();

let PORT = 8080;

app.use((req, res) =>{
    console.log("hii middleware")
    res.send("middlewares finished")
})

app.get("/",(req, res)=>{
    res.send("root")
})
app.get("/random",(req, res)=>{
    res.send("random")
})

app.listen(PORT, ()=>{
    console.log("app is listning")
})