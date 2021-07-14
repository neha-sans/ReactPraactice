import React, { Component } from "react";
import './App.css';
import TaskList from "./todo/TaskList";

const tasks = [
  { status: "DUE", text: "Buy Milk" },
  { status: "DUE", text: "Read Book" },
  { status: "COMPLETED", text: "Draw" },
];
class App extends Component {
  constructor ( props ) {
    super( props )

    this.state = {
      taskInputBox: '',
    }
    this.handleNewTask = this.handleNewTask.bind( this );
  }

  handleNewTask ( event ) {
    this.setState( ( prevState ) => ( {
      ...prevState,
      [ event.target.name ]: event.target.value
    } ) )
  }

  render () {
    return (
      <div style={ { margin: '0 auto', width: '100%' } }>
        <h1>Todo</h1>
        <input
          value={ this.state.taskInputBox }
          name='taskInputBox'
          onChange={ this.handleNewTask }
        />
        <TaskList tasks={ tasks } />
      </div>
    );
  }

}


export default App;
