import React, { Component } from 'react';


const Status = {
	'COMPLETED': { value: 'Completed', next: 'DUE' },
	'DUE': { value: 'Due', next: 'COMPLETED' },
}



class Task extends Component {

	constructor ( props ) {
		super( props )
		this.state = {
			status: props.status
		}
		this.handleTaskStatus = this.handleTaskStatus.bind( this );
	}

	handleTaskStatus () {
		this.setState(
			( prevState ) => {
				return {
					...prevState,
					status: Status[ prevState.status ].next
				}
			},
			() => console.log( "chnaged status", this.state )
		)
	}

	render () {
		return (
			<div>
				<span onClick={ this.handleTaskStatus }>{ Status[ this.state.status ].value }</span>
				{ ` ` + this.props.text }
			</div>
		)
	}
}

export default Task;
