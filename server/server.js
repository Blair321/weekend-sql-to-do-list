const express = require('express');
const app = express();

const todos = require('./routes/todos.router.js');

let PORT = process.env.PORT || 5001;
app.use(express.json())
// routes
app.use('/todos',todos)
// array for to dos
const toDoList = {}
//get route
app.get('/todos', (req, res) => {
  console.log('in /todo GET')
  res.send(toDoList)
})

app.post('/todos', (req, res) => {
  console.log(`In /todos POST with`, req.body);
  toDoList.push(req.body);
  res.sendStatus(201);
});
// Do not modify this!
if (process.env.NODE_ENV == 'test') {
  PORT = 5002;
}

app.use(express.static('./server/public'));
app.use(express.json());

app.use('/todos', todos);

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});
