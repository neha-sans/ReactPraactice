import React, { Component } from 'react'

export default class NewTaskForm extends Component {
	constructor ( props ) {
		super( props )
		this.state = {
			text: '',
		}
		this.handleNewTask = this.handleNewTask.bind( this )
	}

	handleNewTask ( event ) {
		this.setState( ( prevState ) => ( {
			...prevState,
			text: event.target.value
		} ) )
	}


	render () {
		return (
			<form onSubmit={ ( event ) => this.props.onSubmit( event, this.state.text ) }>
				<input
					value={ this.state.text }
					name='text'
					onChange={ this.handleNewTask }
				/>
				<button type='submit'> Save Task</button>
			</form>
		)
	}
}


// import React, { Component } from 'react'

// export default class Input extends Component {
// 	render() {
// 		return (
// 			<div>

// 			</div>
// 		)
// 	}
// }
