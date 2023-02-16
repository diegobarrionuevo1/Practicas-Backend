
const express = require ("express")

const app = express()

const server = app.listen(8080,()=>{
    console.log("listening on port 8080")
})

app.get("/", (request,response)=>{
    response.send("Hola mundo desde express")
})
app.get("/user", (request, response)=>{
    response.send("hola usuario")
})