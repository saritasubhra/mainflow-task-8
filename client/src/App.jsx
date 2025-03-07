import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";
import TaskCalender from "./components/Calender";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const res = await axios.get("http://localhost:8000/api/tasks");
      setTasks(res.data.data);
    }
    fetchTasks();
  }, []);
  return (
    <div>
      <TaskForm setTasks={setTasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
      <TaskCalender tasks={tasks} />
    </div>
  );
}

export default App;
