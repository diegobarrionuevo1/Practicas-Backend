import express from "express"
import { connectDB } from "./config/db.js"
import dotenv  from "dotenv"
const app = express()
const PORT =   process.env.PORT || 3000

//Load ENV vars

dotenv.config()

//ConnectDb
connectDB()

//middleware
app.use(express.json())

const server = app.listen(PORT, (req, res)=>{
    console.log (`listening in port ${PORT} `)
})


