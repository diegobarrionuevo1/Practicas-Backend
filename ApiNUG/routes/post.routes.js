import express from "express"
import { createPost, getPost, getPostById } from "../handles/posts.js"

const postRouter = express.Router()

postRouter.get("/",getPost)
            .post("/",createPost)
            .get("/user/:userId", getPostById)

/* postRouter.post("/",createPost,(req,res)=>{
    console.log({"messege":"ok user post"})
}) */

export default postRouter