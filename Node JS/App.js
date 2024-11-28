const express = require ("express");
const routes = require("./Routes/userRoutes");
const mongoose = require('mongoose')
const app = express();

app.use(express.json())

app.get('/get',(req,res)=>{
    res.send('Helllo World ')
});

app.use(routes)

mongoose.connect('mongodb+srv://Noor:noor123@cluster0.lcr7r.mongodb.net/NoorDB')

.then(()=>{
    console.log("Connected to MongoDB!!!")
})
.catch((error)=>{
    console.log("Error in connecting ",error)
})

app.listen('3000');

console.log("Server created!!!");
