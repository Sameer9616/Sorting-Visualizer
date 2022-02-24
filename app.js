const express = require('express');
const path = require('path');
const app =  express();
const port = process.env.PORT || 8080;
// const dir = 'public'
const fileName = 'index.html';
// const url = path.join('/','.',dir,fileName);
// console.log(url);
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.sendFile(fileName);
    // res.sendFile(url);
})

app.get('/test',(req,res)=>{
    res.send('<h1>Test</h1>');
})

app.listen(port,()=>{
    console.log(`Ready listening on ${port}`);
})