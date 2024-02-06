const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel=require('./Models/Todo')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://tarekahmad484:Tarek484@cluster0.xxnyrwo.mongodb.net/test/?retryWrites=true&w=majority')
    .then(result => console.log("mongo thikase..."))
    .catch(err => res.json(err))

app.post('/add', (req, res) => {
    const task = req.body.task
    TodoModel.create({
        task:task 
    })
    .then(result => res.json(result))
    .catch(err=>res.json(err))
})

app.listen(8000, () => {
    console.log("Server Dourar")
})