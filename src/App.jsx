import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { task as data } from "./data/task";
import { useState, useEffect } from "react";

function App() {
  //Dentro del componente principal App añadimos todos los demás componentes que conforman la aplicación
  //Aqui se coloco el estado task para que los demás componentes tengan acceso a este, el estado se le pasa a los otros componentes a traves de props
  const [task, setTask] = useState([]);

  useEffect(() => {
    setTask(data);
  }, []);

  function createTask(newTask) {
    setTask([
      ...task,
      {
        title: newTask.title,
        id: task.length,
        description: newTask.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    //Aqui estamos generando un nuevo arreglo con filter donde vamos a comparar todos los objetos con la codicion, sí el elemento cumple la condicion se quedara en el nuevo arreglo, sí no, se elimina del nuevo arreglo. El nuevo arreglo se almacena dentro de setTask para actualizar la lista de tareas
    setTask(task.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList task={task} deleteTask={deleteTask} />
    </>
  );
}

export default App;
