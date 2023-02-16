export const createPost = (req, res)=>{
    const body = req.body
    let post = postsInstance.createPost(body)
    res.status(200).send(post)
}
