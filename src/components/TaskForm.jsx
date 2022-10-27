import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const valor = useContext(TaskContext);
  console.log(valor);

  const handleSubmit = (e) => {
    e.preventDefault(); //Este metodo previene que el formulario recarge la página al hacer submit
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu Tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
