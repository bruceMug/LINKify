
const loginPage = (req, res) => {
    res.send('Login page now')
}

const getAllTasks = (req, res) => {
    res.send('get all cards')
}

const createTask = (req, res) => {
    res.send('Created task')
}

const getTask = (req, res) => {
    res.send('Update task')
}

const deleteTask = (req, res) => {
    res.send('Deleting task')
}


module.exports = {
    getAllTasks,
    loginPage, createTask, getTask, deleteTask
}