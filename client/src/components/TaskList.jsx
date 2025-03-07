import axios from "axios";

function TaskList({ tasks, setTasks }) {
  console.log(tasks);
  async function deleteTask(id) {
    await axios.delete(`http://localhost:8000/api/tasks/${id}`);
    setTasks((prev) => prev.filter((task) => task._id !== id));
  }

  return (
    <div>
      <h2>TaskList</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.priority}
            <button onClick={() => deleteTask(task._id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
