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

app.get("/items/:ID", (req, res) => {
    const { ID } = req.params;
    
    const foundItem = importData.find((item) => item.ID == ID);
    
    res.send(foundItem);

})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});