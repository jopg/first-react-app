import { task as data } from "./task"; //Se tuvo que renombrar task como data dentro de este archivo por que se estaban produciendo problemas de conflicto con el nombre de nuestro estado local "task"
import { useState, useEffect } from "react";

function TaskList() {
  //El estado task se inicializa con un array vacio
  //No podemos inicializar task directamente con data, esto como regla se tiene que hacer cuando se cargue el componente, ya que si el componente no se ha cargado, no tenemos acceso a "data"
  const [task, setTask] = useState([]);
  //Yo me pregunto, si solo vamos a mostrar una lista de tareas de un JSON, para que meterlo en un estado? y bueno, esto sucede por que puede ser que una que se ha renderizado la lista de tareas querramos añadir mas tareas, o queramos modificar una tarea o eliminar una tarea, lo que supone que todos estos cambios se tengan que renderizar nuevamente, y para este tipo de información que no es constante, si no que es dinamica en nuestra página, tenemos que utilizar un estado para mostrarla.

  //La ventaja de dejarle al estado que se encargue de almacenar la informacion, es que cuando esa información cambie, el estado se encargue de renderizarla nuevamente.

  //useEffect se va a ejecutar luego de que se carge el componente, por lo que es aquí donde vamos a asignarle a task el json que contiene data
  useEffect(() => {
    setTask(data);
  }, []);

  //Aqui comprobamos que si el array esta vacio, retornaremos un msj que no hay tareas
  if (task.length === 0) {
    return <h1>No hay tareas!</h1>;
  }

  //Si hay tareas disponibles entonces las retornaremos, recorriendo el objeto con el metodo map, tomando en cuenta el atributo key (que seria el id de cada tarea) para el funcionamiento interno de react
  return (
    <div>
      {task.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
