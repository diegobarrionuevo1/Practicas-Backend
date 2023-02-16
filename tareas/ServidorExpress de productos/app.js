const Contenedor = require("./Contenedor")
let contenedor = new Contenedor("Productos.json")



const express = require("express")
const app = express()
const server = app.listen("8080",()=>{
    console.log("Listening on port 8080 ")
})


app.get("/", (req, res)=>{
    res.send("<h1>Home</h1>")
})

app.get("/productos", async (req, res)=>{
    let productos = await contenedor.getAll()
    res.send(productos)
})

app.get("/productoRandom", async (req, res)=>{
    let productos = await contenedor.getAll()
    let random = Math.floor(Math.random() * productos.length)
    console.log(random)
    let randomProduct = await contenedor.getById(random)
    res.send(randomProduct)
})