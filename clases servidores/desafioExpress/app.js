const express =  require("express")
const moment = require("moment/moment")

const app = express()

const server = app.listen("8080",()=>{
    console.log("Listening on port 8080")
})

app.get("/", (request, response)=>{
    response.send("<h1 style='color:blue;'>Bienvenidos al servidor express</h1>")
})

let visitas = 0
app.get("/visitas", (req,res)=>{
    visitas++
    res.send(`haz visitado este endpoint ${visitas} veces`)
})

app.get("/fyh", (req,res)=>{
    let fyh = moment()
    res.send({
        fyh: fyh.format("DD/MM/YYYY hh:mm.ss")
    })
})