
const users = {1 : {'id': 1,'firstname':'Daniel', 'lastname':'Calvo','email':'dcalvo@polpocr.com'}, 2 : {'id':2, 'firstname':'Katherine', 'lastname':'Calvo', 'email':'kcalvo@polpocr.com'}, 3 : {'id': 3,'firstname':'Pablo', 'lastname':'Gutiérrez','email':'pab203.guti@gmail.com'}}

const getUser = async(req, res) => {
    try{
        res.send({data: users})
    }catch(e){
        console.log(e)
    }
}


const createUser = async(req,res) => {
    try{
        const {firstname, lastname, email} = req.body
        console.log(JSON.stringify(req.body))
        const id = Object.keys(users).length + 1
        users[id] = {'id':id,'firstname':firstname, 'lastname':lastname, 'email':email}

        res.send({data: users})
    }catch(e){
        console.log(e)
    }
}

const getUserId = async(req,res) => {
    const id = req.params.id;
    res.send(users[id])
}

const getToDosUser = async(req,res) => {

}
module.exports =  {getUser, getUserId, createUser, getToDosUser}