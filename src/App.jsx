import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { task as data } from "./task";
import { useState, useEffect } from "react";

function App() {
  //Dentro del componente principal App añadimos todos los demás componentes que conforman la aplicación
  //Aqui se coloco el estado task para que los demás componentes tengan acceso a este, el estado se le pasa a los otros componentes a traves de props
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(taskTitle) {
    setTask([
      ...task,
      {
        title: taskTitle,
        id: task.length,
        description: "nueva tarea",
      },
    ]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList task={task} />
    </>
  );
}

export default App;
