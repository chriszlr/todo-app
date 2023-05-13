import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getAllTodods = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/todos/all-todos"
        );

        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllTodods();
  }, []);

  const submitTodo = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/todos/new-todo", {
        title,
        description,
      });

      setTodos([...todos, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/todos/delete-todo/${id}`);

      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>My Todo App</h1>

      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <button onClick={submitTodo}>Add Todo</button>
      </form>

      <h3>Current Todos:</h3>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>

            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
