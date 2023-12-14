import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todoList = await Todo.find();
    res.status(200).json(todoList);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createTodos = async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodos = async (req, res) => {
  console.log(req.params.id);
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateTodo.todo);
  } catch (error) {}
};
