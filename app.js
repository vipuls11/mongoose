const express = require("express");
const app = express();
require("./src/db/conn")
const mensRouter = require("./src/routers/mens")


const PORT = process.env.PORT || 8000;
app.use(express.json()); 

app.use(mensRouter)


app.listen(PORT, ()=>{
    console.log(`Port is listening on ${PORT}`)
})