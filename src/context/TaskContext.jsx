import { createContext, useState, useEffect } from "react";
import jsonTasks from "../data/tasks.json";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(jsonTasks);

  useEffect(() => {
    setTasks(jsonTasks);
  }, []);

  function createTask(task) {
    const taskIdMax = tasks.reduce((max, current) =>
      current.id > max.id ? current : max
    );
    const newId = taskIdMax.id + 1;
    const newTask = {
      id: newId,
      title: task.title,
      description: task.desc,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
