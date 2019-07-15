const express = require('express'),
      app = express(),
      port = process.env.port || 3000;

app.listen(port);
console.log('todo list RESTful API server started on: ' + port)