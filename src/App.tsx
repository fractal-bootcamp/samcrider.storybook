import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Task description="this is a task, do it" title="title of task" />
    </div>
  );
}

export default App;
