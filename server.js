const express = require('express')
const app = express()
const events = require('./event.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.get('/events',(req,res) => {
    res.json(events)
})

app.get('/events/:id',(req,res) => {
    res.json(events.find(event => event.id === req.params.id))
})

app.post('/events', (req,res) => {
    events.push(req.body)
    res.status(201).json(req.body)
})

app.put('/events/:id', (req,res) => {
    const updateIndex = events.findIndex(event => event.id === req.params.id)
    res.json(Object.assign(events[updateIndex],req.body))
})

app.delete('/events/:id',(req,res) => {
    const deletedIndex = events.findIndex(event => event.id === req.params.id)
    events.splice(deletedIndex,1)
    res.status(204).send()
})

app.listen(5334, () =>{
    console.log('Start server at port 5334')
})


