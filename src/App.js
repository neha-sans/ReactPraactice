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
    <div style={ { margin: '0 auto', width: '100%' } }>
      <h1>Todo</h1>
      <input value='Some Value' name='task-input-box' onChange={ ( event ) => { console.log( event.target.value ) } } />
      <TaskList tasks={ tasks } />
    </div>
  );
}


export default App;
