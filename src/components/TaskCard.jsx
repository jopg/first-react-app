function TaskCard({ task, deleteTask }) {
  //Como este componente tiene acceso al id de cada tarea, al momento de llamar a deleteTask lo haremos con el task.id de la tarea que queremos eliminar
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
