const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskController = require('./controllers/taskController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para exibir a lista de tarefas
app.get('/', taskController.listTasks);

// Rota para adicionar uma nova tarefa
app.post('/add', taskController.addTask);

// Rota para excluir uma tarefa
app.get('/delete/:id', taskController.deleteTask);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
