import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function CreateTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.descripcion,
      },
    ]);
  }

  function DeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    //Por cada tarea que recorras voy a comparar si la tarea en su propiedad "Id" es distinto del taskId que te estan pasando

    //SetTask me trae la data
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        DeleteTask,
        CreateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

//Provider = Nombre especifico del componente por que es provedor de un estado al resto

//Desde TaskContext estare creando un Provider que tendra un {props.children}

//Task = Areglo de tareas

//TasContext =  Tarea o el contexto de las tareas
