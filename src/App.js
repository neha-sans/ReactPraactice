import React, { Component } from "react";
import './App.css';
import NewTaskForm from './todo/NewTaskForm';
import TaskList from "./todo/TaskList";
import Wrapper from './util/Wrapper';

class App extends Component {
  constructor ( props ) {
    super( props )

    this.state = {
      tasks: [
        { status: "DUE", text: "Buy Milk" },
        { status: "DUE", text: "Read Book" },
        { status: "COMPLETED", text: "Draw" },
      ]
    }

    this.handleSubmit = this.handleSubmit.bind( this );

  }

  handleSubmit ( event, newTaskText ) {
    event.preventDefault();
    this.setState( ( prevState ) => {
      const newTasks = [ ...prevState.tasks ];
      newTasks.push( { status: "DUE", text: newTaskText } );

      return {
        ...prevState,
        taskInputBox: '',
        tasks: [ ...newTasks ]
      }
    } )
  }

  render () {
    return (
      <React.Fragment>
        <h1>Todo</h1>
        <NewTaskForm onSubmit={ this.handleSubmit } />
        <TaskList tasks={ this.state.tasks } />
      </React.Fragment >
    );
  }

}


export default App;
