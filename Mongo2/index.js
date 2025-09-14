const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path");
const chat = require("./models/chat.js")
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

main().then((res) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    res.render("index.ejs", { chats })
})

// new route 
app.get("/chats/new", (req, res) => {
    throw new ExpressError(404, "ppage not found")
    res.render("new.ejs")
})

//  create route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    })
    newChat.save().then(res => { console.log("chat was saved") }).catch(err => { console.log(err) })
    res.redirect("/chats");
})

// show route 
app.get("/chats/:id", async (req, res, next) => {
    let { id } = req.params;
    let chats = await chat.findById(id);
    if(!chats){
       return next(new ExpressError(404, "chat not found"))
    }

    res.render("edit.ejs", { chats })
})

// edit route 
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chats = await chat.findById(id);
    res.render("edit.ejs", { chats })
})

// update route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updateChat = await chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true, new: true }
    );
    console.log(updateChat);
    res.redirect("/chats")
})

// delete route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deleted = await chat.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect("/chats")
})

app.get("/", (req, res) => {
    res.send("root is working");
})

// error handling
app.use((err, req, res, next) => {
    let { status = 500, message = "sone error" } = err;
    res.status(status).send(message);
})
app.listen(8080, () => {
    console.log("listening")
})