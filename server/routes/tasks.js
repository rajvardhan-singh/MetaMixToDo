import express, { Router } from 'express';


import { addTodo, getAllTodos,toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();
import auth from "../middleware/auth.js";

route.post('/addtask', addTodo);
route.get('/todos', getAllTodos);
// route.get('/todos/:id', toggleToDone);
// route.get('/todos/:id', toggleToActive);
// route.get('/todos/:id', toggleToPending);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);


export default route;