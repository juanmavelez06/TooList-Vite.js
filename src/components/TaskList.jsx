import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    //Length me recorre y devuelve la cantidad de elementos
    return (
      <div className="NoTask">
        <h1 className="No_Task">No tienes tareas pendientes</h1>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;

// import TaskCard from "./TaskCard";

// function TaskList(props) {

//   if (props.tasks.length === 0) {
//     //Length me recorre y devuelve la cantidad de elementos
//     return <h1>No hay Tareas aun</h1>;
//   }

//   return (
//     <div>
//       {props.tasks.map((task) => (
//        <TaskCard key={task.id} task = {task}/>
//       ))}
//     </div>
//   );
// }

// export default TaskList;
