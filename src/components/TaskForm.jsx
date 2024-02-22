import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, desc });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Agregar Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <br />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descricion de la tarea."
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        ></textarea>
        <button className="bg-indigo-800 px-3 py-1 rounded-md text-white hover:bg-indigo-400">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
