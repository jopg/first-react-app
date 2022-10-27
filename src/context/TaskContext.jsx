import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

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

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
