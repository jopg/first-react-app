import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //Este metodo previene que el formulario recarge la página al hacer submit
    createTask(title);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu Tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
