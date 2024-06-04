import { TaskProps } from "./components/Task";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";

const tasks: TaskProps[] = [
  { title: "first task", description: "first task description", id: 0 },
  { title: "first task", description: "first task description", id: 0 },
  { title: "first task", description: "first task description", id: 0 },
  { title: "first task", description: "first task description", id: 0 },
  { title: "first task", description: "first task description", id: 0 },
];

function App() {
  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
