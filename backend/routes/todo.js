import express from "express";
import {
  createTodos,
  deleteTodos,
  getTodos,
  updateTodo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodos);
router.delete("/:id", deleteTodos);
router.put("/:id", updateTodo);

export default router;
