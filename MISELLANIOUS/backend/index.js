const express = require("express");
const app = express();
let port = 8080;

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.get("/register",(req,res)=>{
    let{user, pswd} = req.query;
    res.send(`standard get request ${user}`)
})
app.post("/register",(req,res)=>{
    console.log(req.body)
    let{user, pswd} =req.body;
    res.send(`standard post request${user}`)
})

app.listen(port,()=>{
    console.log(`listening on port${port}`)
})