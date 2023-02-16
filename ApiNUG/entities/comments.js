import { v4 as uuidv4 } from 'uuid';

class Comment  {
    constructor(postId,name,body){
        this.id = uuidv4() 
        this.postId = postId
        this.name = name
        this.body = body
        
    }
}

class Comments {
    constructor(){
        this.comments= []
    }
    getComments(){
        return this.comments
    }
    createComment({postId, name, body}){
        const comment = new Comment(postId,name,body)
        this.comments.push((comment))
        return(this.comments)
    }

}

const commentsInstance = new Comments

export default commentsInstance