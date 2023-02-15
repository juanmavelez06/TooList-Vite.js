import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  useContext(TaskContext);
  const { CreateTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateTask({
      title,
      descripcion,
    });

    setTitle("");
    setDescripcion("");
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Tarea-input"
        placeholder=" Agregar una Tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      ></input>
      <input
        className="Descripcion"
        placeholder=" Descripcion de la Tarea..."
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        value={descripcion}
      ></input>
      <div className="ButtonAgregar">
        <button className="GuardarTarea">Guardar Tarea</button>
      </div>
    </form>
  );
}

export default TaskForm;

//TaskForm recive como un prop el CreateTask
