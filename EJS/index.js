const express = require("express")
const app = express()

 let port = 8080;

 app.set("view engine", "ejs")

 app.get("/:home",(req,res) =>{
   let {home} = req.params
   res.send(home);
 })

 app.get("/",(req,res) =>{
   res.render("home.ejs");
 })
 app.get("/ig/:username",(req,res) =>{
   let {username} = req.params
   const data = require("./data.json")
   let datas = data[username]
   console.log(datas)
   res.render("instagram.ejs",{datas});
 })
 app.get("/rolldice",(req,res) =>{
   let diceVal =   Math.floor(Math.random()*6)+1;
   res.render("dice.ejs",{diceVal});
 })

 app.listen(port,()=>{
    console.log(`listening on port${port}`)
 })