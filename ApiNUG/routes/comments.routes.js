import express from "express"
import { createComment, getComments } from "../handles/comments.js"

const commentsRouter = express.Router()



commentsRouter.post("/",createComment).get("/",getComments)

export default commentsRouter