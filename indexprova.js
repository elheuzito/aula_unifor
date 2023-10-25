const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("<h1>Página Principal</h1>")
})
app.get("/2",function(req,res){
    res.send("<h1>Página 2</h1>")
})

app.get("/3",function(req,res){
    res.send("<h1>Página 3</h1>")
})


app.listen(4000,function(erro){
    if(erro){
        console.log("Deu erro")
    }else{
        console.log("Servidor Iniciado")
    }
})