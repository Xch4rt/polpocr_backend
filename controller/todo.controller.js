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

const createTask = async(req,res) => {
    try{
        const id = req.params.id;
        const lastd_id = tasks[id].length + 1
        const {title, completed} = req.body
        console.log(JSON.stringify(req.body))
        tasks[lastd_id] = {'id':lastd_id,'title':title, 'completed':completed, 'todoid':id, 'userid':id}

        res.send({data: tasks[lastd_id]})
    }catch(e){
        console.log(e)
    }
}


module.exports = {getTodo, createTask}