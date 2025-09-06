const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');


main().then((res) => {
    console.log("successfull");
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

const user2 = new User({
    name: "eve",
    email: "eve@gmail.com",
    age: 40,
})
user2.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

User.insertMany([
    {name:"khushi", email: "khushi@gmail", age: 20},
    {name:"mayank", email: "mayank@gmail", age: 20},
]).then((res) => {
    console.log(res);
})

