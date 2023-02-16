const express = require("express")

const app = express()

const server = app.listen(8080, ()=> console.log(" listening on port 8080"))
const frase = "hola mundo como estan"

app.get("/api/frase", (req,res)=>{
    try {
        res.send({frase:frase})
    } catch (error) {
        console.log(error)
    }
})

app.get("/api/letters/:num", (req, res)=>{
    try {
        let number  = req.params.num
        let position = parseInt(number)
        if (isNaN(number)){
            res.status(400).send({error:"not a number"})
        }
        if (position>frase.length){
            res.status(400).send({error:"fuera de rango"})
        }
        
        res.send({letter: frase[position-1]})
        
    } catch (error) {
        console.log(error)
    }
    /*res.send({letter: frase.charAt(position-1)})*/ 
})

app.get("/api/words/:num", (req, res)=>{
    let number  = req.params.num
    if (isNaN(number)){
        res.status(400).send({error:"not a number"})
    }
    let position = parseInt(number)
    let array = frase.split(" ")
    if (position>array.length||position<1){
        res.status(400).send({error:"Out of bounds"})
    }
    res.send({word: array[position-1]})
    /*res.send({letter: frase.charAt(position-1)})*/ 
})

app.post("/api/hola",(req,res)=>{
    try{
        res.send("hola")
    }
    catch(error){
        console.log(error)
    }
})