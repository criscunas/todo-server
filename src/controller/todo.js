import fs from 'fs'
import {v4 as uuidv4} from 'uuid';

const createTodo = async (request, response) => {
    const description = request.body.description 
    let todoObj = {}

    if (!description) {
        return response.status(400).send('Missing required field.')
    }

    todoObj.description = description
    todoObj.id = uuidv4()
    todoObj.is_completed = false

    const data = JSON.parse(fs.readFileSync('data/todos.json'))

    data.push(todoObj)

    let parsed_data = JSON.stringify(data)

    fs.writeFileSync('data/todos.json', parsed_data)

    return response.json({
        todos: data,
    })
}

const updateTodo = async (request, response) => {
    const id = request.params.id

    let data = JSON.parse(fs.readFileSync('data/todos.json'))
    
    let isValid = data.find(item => item.id === id)

    if (!isValid) {
        return response.status(400).send('Item not found')
    }

    data = data.map((item) => {
        if(item.id === id) {
           item.is_completed = true
        }
        return item
    })
    
    let parsedData = JSON.stringify(data)
    fs.writeFileSync("data/todos.json", parsedData)

    return response.json({
        payload: data
    })

}

const deleteTodo = async (request, response) => {
    const id = request.params.id
    let data = JSON.parse(fs.readFileSync('data/todos.json'))

    let item = data.find(item => item.id === id)

    if (!item) {
        return response.send('Invalid id')
    }

    data = data.filter(item => item.id !== id)

    fs.writeFileSync("data/todos.json", JSON.stringify(data))

    return response.json({
        payload: data,
    })
}


const getAll = async (request, response) => {
    let data = fs.readFileSync('data/todos.json')
    const parsedData = JSON.parse(data)

    return response.json({
        payload: parsedData,
    })
}

export default {
    createTodo,
    deleteTodo,
    updateTodo,
    getAll
}