import axios from "axios";
import { useEffect, useState } from "react";


const API_URL = import.meta.env.VITE_BACKEND;

function App() {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("")


  const fetchTodos = async () => {
    const res = await axios.get(`${API_URL}/todo`);
    setTodos(res.data)
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  const handleAddTodo = async () => {
    if(!title)  return;

    await axios.post(`${API_URL}/todo`, {
      title
    })

    setTitle("");
    fetchTodos();
  }

  const handleDeleteTodo = async (id) => {
    await axios.delete(`${API_URL}/todo/${id}`)
    fetchTodos();
  }

  const handleTodoEdit = async (id, currentTitle) => {
    setEditingId(id);
    setEditingTitle(currentTitle);
  }

  const handleSaveEdit = async (id) => {
    if(!editingId)  return;

    await axios.put(`${API_URL}/todo/${id}`, {
      title: editingTitle
    });

    setEditingId(null);
    setEditingTitle("");
    fetchTodos();
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-5">TODO-APP</h1>

      <div className="flex gap-3 mb-5 w-full max-w-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new todo..."
        />

        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      <div className="w-full max-w-md flex flex-col gap-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border px-3 py-2 rounded flex justify-between items-center bg-gray-50"
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="border px-2 py-1 flex-1 mr-2"
                />
                <button
                  onClick={() => handleSaveEdit(todo.id)}
                  className="text-green-500 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{todo.title} {todo.isEdited && "(edited)"}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleTodoEdit(todo.id, todo.title)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;