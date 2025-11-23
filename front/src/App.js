import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    setText("");
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await fetch(`/api/todos/${id}/toggle`, { method: "PATCH" });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Dockerized MERN Todo App</h1>

      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(todo._id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
