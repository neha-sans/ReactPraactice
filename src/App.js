import React, { Component } from "react";
import "./App.css";
import Pokemon from "./pokemon/Pokemon";

export default class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      characterIds: [ ...this.props.pokemon ],
    };
    this.deletePokemon = this.deletePokemon.bind( this );
  }

  deletePokemon ( idToDelete ) {
    this.setState( ( prevState ) => {
      const prevIds = [ ...prevState.characterIds ];
      const newIds = prevIds.filter( id => id !== idToDelete );
      console.log( newIds, idToDelete )
      return {
        ...prevState,
        characterIds: newIds
      };
    } );
  }

  render () {
    return (
      <div className="App">
        { this.state.characterIds.map( ( characterId, index ) => (
          <Pokemon key={ `Pokemon_${ index }` } onDelete={ this.deletePokemon } characterId={ characterId } />
        ) ) }
      </div>
    );
  }
}

// import NewTaskForm from './todo/NewTaskForm';
// import TaskList from "./todo/TaskList";
// class App extends Component {
//   constructor ( props ) {
//     super( props )

//     this.state = {
//       tasks: [
//         { status: "DUE", text: "Buy Milk" },
//         { status: "DUE", text: "Read Book" },
//         { status: "COMPLETED", text: "Draw" },
//       ]
//     }

//     this.handleSubmit = this.handleSubmit.bind( this );

//   }

//   handleSubmit ( event, newTaskText ) {
//     event.preventDefault();
//     this.setState( ( prevState ) => {
//       const newTasks = [ ...prevState.tasks ];
//       newTasks.push( { status: "DUE", text: newTaskText } );

//       return {
//         ...prevState,
//         taskInputBox: '',
//         tasks: [ ...newTasks ]
//       }
//     } )
//   }

//   render () {
//     return (
//       <React.Fragment>
//         <h1>Todo</h1>
//         <NewTaskForm onSubmit={ this.handleSubmit } />
//         <TaskList tasks={ this.state.tasks } />
//       </React.Fragment >
//     );
//   }

// }
