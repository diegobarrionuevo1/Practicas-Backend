import { v4 as uuidv4 } from 'uuid';
/* POSTMAN
{
    "userid":"55",
    "name":"agustina",
    "userName":"agustina",
    "email":"agusyazul@gmail.com"
}
*/
class User  {
    constructor(name,userName,email){
        this.id = uuidv4() 
        this.name = name
        this.username = userName
        this.email = email
    }
}

class Users {
    constructor(){
        this.users= []
    }
    getUsers(){
        return this.users
    }
    createUser({name, userName, email}){
        const user = new User(name,userName,email)
        this.users.push((user))
        
        return(this.users)
    }

}

const usersInstance = new Users

export default usersInstance