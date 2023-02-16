import express from "express"
import indexRouter from "./routes/index.js"

const app = express()
const PORT =   process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Rotes
app.use("/api", indexRouter)

const server = app.listen(PORT, (req, res)=>{
    console.log (`listening in port ${PORT} `)
})


