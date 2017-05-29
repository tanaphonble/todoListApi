'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Router
    app.route('/tasks')
        .get(todoList.listAllTasks)
        .post(todoList.createATask);

    app.route('/tasks/:taskId')
        .get(todoList.readATask)
        .put(todoList.updateATask);

    app.use(function (req, res) {
        res.status(404).send({ url: req.originalUrl + ' not found' })
    });
}