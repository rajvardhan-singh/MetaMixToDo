import express from 'express';
import mongoose from 'mongoose';
import todo from '../model/Todo.js';

import Todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            taskname: request.body.data,
            createdAt: new Date().toISOString()
        });
        // console.log(newTodo);
        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 });

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (request, response) => {
    try {
        const todoRef = await Todo.findById(request.params.id);
        // console.log(request.params);
        // console.log(todoRef);

        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            {done:!todoRef.done}, 
        )
        console.log(todo.done);
        // if(todo.done){
            
        // }
        console.log(todoRef.done);

        await todo.save();
        
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
// export const toggleToActive = async (request, response) => {
//     try {
//         // const todoRef = await Todo.findById(request.params.id);

//         const todo = await Todo.findOneAndUpdate(
//             { _id: request.params.id },
//             { status:"active" }
//         )

//         await todo.save();

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }
// export const toggleToPending = async (request, response) => {
//     try {
//         // const todoRef = await Todo.findById(request.params.id);

//         const todo = await Todo.findOneAndUpdate(
//             { _id: request.params.id },
//             { status:"pending" }
//         )

//         await todo.save();

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }
// export const toggleToDone = async (request, response) => {
//     try {
//         // const todoRef = await Todo.findById(request.params.id);

//         const todo = await Todo.findOneAndUpdate(
//             { _id: request.params.id },
//             { status:"done" }
//         )

//         await todo.save();

//         return response.status(200).json(todo);
//     } catch (error) {
//         return response.status(500).json(error.message);
//     }
// }

export const updateTodo = async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const todo = await Todo.findById(request.params.id);
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id);

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}