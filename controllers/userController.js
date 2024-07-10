const data = require("../data/userData")

const getAllData = (request, response) =>{
    return response.status(200).json(data)
}

const addNewUser = (request, response) =>{
    let userExists = false
    data.map((ele)=>{
        if(ele.uname === request.body.uname && ele.email === request.body.email){
            userExists = true
            return  response.status(200).json({status: "User already exists"})
        }
    })
    data.push(request.body)
    if(!userExists){
        return  response.status(200).json({status: "New user added"})
    }
}

const loginUser = (request, response) =>{
    let userFound = false
    data.map((ele)=>{
        if(ele.uname === request.body.uname && ele.pwd === request.body.pwd){
            userFound=true
            return response.status(200).json({status: "Successfully logged in"})
        }
    })
    if(!userFound){
        return response.status(404).json({status: "User not found or Wrong creds"})
    }
}

module.exports = {getAllData,addNewUser, loginUser}