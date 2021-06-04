const express = require('express');
const app = express();
const path = require('path');
const port = 3030
app.use(express.static('public'));

app.listen(3030, () => console.log("Servidor corriendo por el puerto "+ port));
app.get('/', (req,res) => res.sendFile(path.join(__dirname,'views','index.html')));
app.get('/views/aang.html',(req,res)=> res.sendFile(path.join(__dirname,'views','aang.html')));
app.get('/views/katara.html',(req,res)=> res.sendFile(path.join(__dirname,'views','katara.html')));
app.get('/views/sokka.html',(req,res)=> res.sendFile(path.join(__dirname,'views','sokka.html')));
app.get('/views/toph.html',(req,res)=> res.sendFile(path.join(__dirname,'views','toph.html')));
app.get('/views/zuko.html',(req,res)=> res.sendFile(path.join(__dirname,'views','zuko.html')));



