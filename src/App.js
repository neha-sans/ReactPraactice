import React, { Component } from "react";
import './App.css';
import TaskList from "./todo/TaskList";

class App extends Component {
  constructor ( props ) {
    super( props )

    this.state = {
      taskInputBox: '',
      tasks: [
        { status: "DUE", text: "Buy Milk" },
        { status: "DUE", text: "Read Book" },
        { status: "COMPLETED", text: "Draw" },
      ]
    }
    this.handleNewTask = this.handleNewTask.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );

  }

  handleNewTask ( event ) {

    this.setState( ( prevState ) => ( {
      ...prevState,
      [ event.target.name ]: event.target.value
    } ) )
  }

  handleSubmit ( event ) {
    event.preventDefault();
    this.setState( ( prevState ) => {
      const newTasks = [ ...prevState.tasks ];
      newTasks.push( { status: "DUE", text: prevState.taskInputBox } );

      return {
        ...prevState,
        taskInputBox: '',
        tasks: [ ...newTasks ]
      }
    } )
  }

  render () {
    return (
      <div style={ { margin: '0 auto', width: '100%' } }>
        <h1>Todo</h1>
        <form onSubmit={ this.handleSubmit }>
          <input
            value={ this.state.taskInputBox }
            name='taskInputBox'
            onChange={ this.handleNewTask }
          />
          <button type='submit'> Save Task</button>
        </form>

        <TaskList tasks={ this.state.tasks } />
      </div>
    );
  }

}


export default App;
