import commentsInstance from "../entities/comments.js"

export const getComments = (req,res)=>{
    const comments = commentsInstance.getComments()
    res.status(200).json({status:"success", data: comments})
}

export const createComment = (req, res)=>{
    const body = req.body
    let users = commentsInstance.createComment(body)
    res.status(200).send(users)
}
