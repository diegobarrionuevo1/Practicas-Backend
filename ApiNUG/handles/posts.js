import postsInstance from "../entities/posts.js"

export const getPost = (req,res)=>{
    const post = postsInstance.getPost()
    res.status(200).json({status:"success", data: post})
}

export const getPostById = (req,res)=>{
    const id =  req.params.userId    
    const postsId = postsInstance.getPostById(id)
    res.status(200).json({status:"success", data: postsId})
}

export const createPost = (req, res)=>{
    const body = req.body
    let post = postsInstance.createPost(body)
    res.status(200).send(post)
}
