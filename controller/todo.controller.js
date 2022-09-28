const todos = {1 : {"id":1, "title":"Universidad", "keywords":["estudios","importante","academia"],"userid":1, "todos":[]}}
const tasks = {1:[{"id":1, "title": "Estudiar para el examen de programacion", "completed":0, "todoid":1, "userid":1}, {"id":2,"title":"Ir a clases", "completed":1, "todoid":1,"userid":1}]}

const getTodo = async(req,res) => {
    try{
        const response = []
        const id = req.params.id;
        todos[id].todos.push(tasks[id])
        response.push(todos)
        res.send(response)
    }catch(e){
        console.log(e)
    }
}

const createTask = async(req,res) => {}


module.exports = {getTodo, createTask}