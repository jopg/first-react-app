import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  //Dentro del componente principal App añadimos todos los demás componentes que conforman la aplicación
  //Aqui se coloco el estado task para que los demás componentes tengan acceso a este, el estado se le pasa a los otros componentes a traves de props
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
