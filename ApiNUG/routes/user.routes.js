import express from "express"
import { createUser, getUsers } from "../handles/users.js"

const usersRouter = express.Router()



usersRouter.post("/",createUser)
            .get("/",getUsers)
            

export default usersRouter