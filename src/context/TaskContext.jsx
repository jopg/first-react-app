import { createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  let x = 20;
  //Por consola aparece 5 veces el valor de 20, cuando deberian ser 4 veces,  segun fazt esto pasa por culpa del useEffect que esta en App.jsx ya que el renderiza una primera vez y luego otra vez la aplicacion, por lo que seria 20 y 20, y 20 20 20 por parte de TaskCard

  //Los 20 que aparecen en gris en consola son por el restrict mode de react en main.jsx

  return (
    <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>
  );
}
