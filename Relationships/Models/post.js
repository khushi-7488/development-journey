const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => console.log("connection successfull"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

}

const userSchema = new Schema({
    username: String,
    email: String,
})

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const getData = async () => {
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
}

getData();

// const addData = async () =>{
//     let user = await User.findOne({username: "rahulkumar"})
//     let post2 = new post({
//         content: "bye ",
//         likes: 7,
//         user: user._id,
//     })

//     post.user = user;

//     // await user1.save();
//     await post2.save();

// }

// addData();
