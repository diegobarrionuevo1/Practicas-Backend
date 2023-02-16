import usersInstance from "../entities/users.js";

export const getUsers = (req,res)=>{
    const users = usersInstance.getUsers()
    res.status(200).json({status:"success", data: users})
}



export const createUser = (req, res)=>{
    const body = req.body
    let users = usersInstance.createUser(body)
    res.status(200).send(users)
}

