import express from 'express'
import todoController from '../controller/todo.js'
import appController from '../controller/app.js'

const router = express.Router()

router.route('/').get(appController.testRoute)
router.route('/todo/create').post(todoController.createTodo)
router.route('/todo/delete/:id').delete(todoController.deleteTodo)
router.route('/todo/update/:id').put(todoController.updateTodo)
router.route('/todo/all').get(todoController.getAll)

export default router