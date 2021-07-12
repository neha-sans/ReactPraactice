import React from "react";
import './App.css';
import TaskList from "./todo/TaskList";

const App = () => {
  const tasks = [
    { status: "DUE", text: "Buy Milk" },
    { status: "DUE", text: "Read Book" },
    { status: "COMPLETED", text: "Draw" },
  ];
  return (
    <div>
      <h1>Todo</h1>
      <TaskList tasks={ tasks } />
    </div>
  );
}


export default App;
