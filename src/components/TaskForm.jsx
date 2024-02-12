import { useContext, useState } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
        title,
        description,
    });
    setTitle("")
    setDescription("")
  };

  return (
    <div className="max-w-md mx-auto mb-3">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb.4 ">
        <h1 className="text-2xl font-bold mb-3 text-white">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
