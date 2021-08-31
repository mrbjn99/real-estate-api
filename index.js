const express =require("express");
const app = express();
const importData = require("./data.json");
let port = process.env.PORT || 5000;


app.get("/", (req , res) =>{
    res.send("Welcome to Real-estate-api")
});

app.get("/items", (req,res) => {

    res.send(importData);
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});