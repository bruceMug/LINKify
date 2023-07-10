const express = require('express')
const router = express.Router();

const { loginPage, getAllTasks, createTask, getTask, deleteTask, } = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask).post(loginPage)
router.route('/:id').get(getTask).delete(deleteTask)

module.exports = router
