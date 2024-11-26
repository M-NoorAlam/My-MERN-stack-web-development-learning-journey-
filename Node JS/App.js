const express = require ("express");

const app = express();

app.get('/data',(req,res)=>{
    res.send('First API')
})

app.listen('3000');

console.log("Connected");
//read about mongo db and express