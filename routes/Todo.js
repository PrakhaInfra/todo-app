const express = require('express');
const router = express.Router();


const {createTodo} = require('../controller/createTodo');
const {getTodo} = require('../controller/getTodo');
const { getTodoById } = require('../controller/getTodoById');
const{updateTodo} = require('../controller/update');
const{deleteTodo} = require('../controller/deleteTodo');

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById); 
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);


module.exports = router;