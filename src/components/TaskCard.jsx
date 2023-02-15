import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  // const valor = useContext(TaskContext)
  // console.log(valor)

  const { DeleteTask } = useContext(TaskContext);

  return (
    <div className="TaskCard_Principal">
      <div className="TaskCard_div">
        <h1 className="Titulo-Task">{task.title}</h1>
        <p ClassName="Descripcion-Task">{task.description}</p>
        <button className="EliminarTarea" onClick={() => DeleteTask(task.id)}>
          Eliminar Tarea
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

//Recive props de la tarea en la funcion para eliminar la tarea
