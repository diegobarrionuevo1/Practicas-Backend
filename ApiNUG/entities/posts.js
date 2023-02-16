import { v4 as uuidv4 } from 'uuid';

class Post  {
    constructor(userId,title,body){
        this.id = uuidv4() 
        this.userId = userId
        this.title = title
        this.body = body
        
    }
}

class Posts {
    constructor(){
        this.posts= []
    }
    getPost(){
        return this.posts
    }
    getPostById(id){
        const user = id
        const userPosts = this.posts.filter((post,i) => {
            if (post.userId === user){
                return post
            }
        });
        return userPosts
    }
    createPost({userId, title, body}){
        const post = new Post(userId,title,body)
        this.posts.push((post))
        return(this.posts)
    }

}

const postsInstance = new Posts

export default postsInstance