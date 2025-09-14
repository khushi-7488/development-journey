const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

let PORT = 8080;

app.use((req, res, next) => {
    let { query } = req.query;
    console.log("hii middleware")
    console.log(query);
    next();
})

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "abcd") {
        next();
    }
    throw new ExpressError(401, "Access Denied")
}


app.get("/random", (req, res) => {
    res.send("random")

})

app.get("/err", (req, res) => {
    ajkdb = akjsf;
})
app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.use((err, req, res, next) => {
    let{status, message} = err;
    res.status(status).send(message);
    console.log("------ERROR-------");
    res.send(err);
})

// app.use((req, res) => {
//     res.send("page not found")
// })

app.listen(PORT, () => {
    console.log("app is listning")
})