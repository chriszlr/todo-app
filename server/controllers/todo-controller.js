const Todo = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = new Todo(req.body);

    const savedTodo = await newTodo.save();

    res.status(200).json(savedTodo);
  } catch (error) {
    console.log(error);
  }
};

const updateTodoById = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};

const deleteTodobyId = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    res.status(200).json("Todo deleted!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodoById,
  deleteTodobyId,
};
