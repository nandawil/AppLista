const Task = require('../models/taskModel');

// Array para armazenar as tarefas
let tasks = [];

module.exports = {
  listTasks: (req, res) => {
    res.render('index', { tasks });
  },
  addTask: (req, res) => {
    const { description } = req.body;
    const id = tasks.length + 1;
    const newTask = new Task(id, description);
    tasks.push(newTask);
    res.redirect('/');
  },
  deleteTask: (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.redirect('/');
  }
};
