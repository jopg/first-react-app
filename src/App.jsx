import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  //Dentro del componente principal App añadimos todos los demás componentes que conforman la aplicación
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
