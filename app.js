const express = require('express')
const app = express()
const tasks = require("./routes/cards")

//middleware
app.use(express.json())


// routes
app.get('/hello', (req, res) => {
    res.send('Link manager app')
})

app.use('/api/v1/tasks', tasks)


// app.post('/api/v1/login)             -logging in
//  app.get('/api/v1/tasks)             -get all tasks
// app.get('api/v1/tasks/:id')          -get single task
// app.post('/api/v1/tasks')            -create new task
// app.delete('/api/v1/tasks/:id)       -delete card

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`))
