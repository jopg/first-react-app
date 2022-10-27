import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task, deleteTask }) {
  //Como este componente tiene acceso al id de cada tarea, al momento de llamar a deleteTask lo haremos con el task.id de la tarea que queremos eliminar
  const valor = useContext(TaskContext);

  console.log(valor);
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
