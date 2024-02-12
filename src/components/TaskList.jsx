import TaskCard from "./TaskCard";
import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  } else {
    return (
      <div className="grid grid-cols-5 gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
      </div>
    );
  }
}

export default TaskList;
