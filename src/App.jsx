import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  //Dentro del componente principal App añadimos todos los demás componentes que conforman la aplicación
  //Aqui se coloco el estado task para que los demás componentes tengan acceso a este, el estado se le pasa a los otros componentes a traves de props
  return (
    <>
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;
