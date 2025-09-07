const mongoose = require("mongoose")
const chat = require("./models/chat.js")


main().then((res) => {
    console.log("connection successfull");
})
    .catch(err => console.log(err));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allchats = [
        {
    from: "rohit",
    to: "mohit",
    msg: "mohit rohit",
    created_at: new Date()
},
    {
    from: "ayush",
    to: "som",
    msg: "som ayush",
    created_at: new Date()
},
    {
    from: "madhu",
    to: "sandeep",
    msg: "madhu sandeep",
    created_at: new Date()
},
    {
    from: "mummy",
    to: "papa",
    msg: "mummy papa",
    created_at: new Date()
}]


 chat.insertMany(allchats);
