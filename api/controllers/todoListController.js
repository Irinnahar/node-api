'use strict';

const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

// get all the list
exports.list_all_tasks = function (req, res) {
  Task.find({}, function (error, task) {
    if (error) {
      res.send(error);
    } else {
      res.json(task);
    }
  })
}

// post or create a new task
exports.create_a_task = (req, res) => {
  const new_task = new Task(req.body);
  new_task.save((error, task) => {
    if (error) {
      res.send(error)
    } else {
      res.json(task)
    }
  })
}

// get a task by ID
exports.read_a_task = () => {
  Task.findById(req.params.taskId, (error, task) => {
    if (error) {
      res.send(error)
    } else {
      res.json(task)
    }
  })
}

// update a task by ID
exports.update_a_task = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.taskId }, req.body, { new: true }, (error, task) => {
      if (error) {
        res.send(error)
      } else {
        res.json(task)
      }
    }
  )
}

// remove a task by id
exports.delete_a_task = (req, res) => {
  Task.remove(
    { _id: req.params.taskId }, (err, task) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Task successfully deleted' });
    }
  )
}