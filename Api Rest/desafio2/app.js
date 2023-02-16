const express = require("express")

const app = express()
const server = app.listen(8080,()=>{
    console.log("listening on port 8080")
})
let sentence = "hola buenas, que paja ahcer esto tantas veces, quiza deberia buscar una manera mas rapida de estudiar esto"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/frase", (req,res)=>{
    try {
        res.send({sentence:sentence})
    } catch (error) {
        console.log(error)
    }
})

app.get("/api/palabras/:pos", (req,res)=>{
    try {
        let position = parseInt(req.params.pos)
        let arrayFrase = sentence.split(" ")
        res.send({buscada:arrayFrase.charAt(position)})
    } catch (error) {
        console.log(error)
    }
})

app.post("/api/palabras", (req,res)=>{
    try {
        let clietPost = req.body.word
        sentence = sentence.concat(` ${clietPost}`)
        res.send({word: clietPost})
        
    } catch (error) {
        console.log(error)
    }
})

app.put("/api/palabras/:pos", (req,res)=>{
    try {
        let number  = req.params.pos
        if (isNaN(number)){
            res.status(400).send({error:"not a number"})
        }
        let position = parseInt(number)
        let array = sentence.split(" ")
        if (position>array.length||position<1){
            res.status(400).send({error:"Out of bounds"})
        }
        let clietPost = req.body.word
        array[position-1] = clietPost
        sentence = array.join(" ")
        res.send({newSentence:sentence})
    } catch (error) {
        console.log(error)
    }
})

app.delete("/api/palabras/:pos", (req,res)=>{
    try {
        let number  = req.params.pos
        if (isNaN(number)){
            res.status(400).send({error:"not a number"})
        }
        let position = parseInt(number)
        let array = sentence.split(" ")
        if (position>array.length||position<1){
            res.status(400).send({error:"Out of bounds"})
        }
        array.splice(position-1,1)
        sentence = array.join(" ")
        res.send({newSentence:sentence})
    } catch (error) {
        console.log(error)
    }
})