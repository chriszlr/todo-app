const express = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodoById,
  deleteTodobyId,
} = require("../controllers/todo-controller");

const router = express.Router();

router.get("/all-todos", getAllTodos);
router.post("/new-todo", createTodo);
router.put("/update-todo/:id", updateTodoById);
router.delete("/delete-todo/:id", deleteTodobyId);

module.exports = router;
