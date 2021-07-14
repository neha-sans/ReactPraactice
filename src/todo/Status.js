import React, { Component } from 'react'

const E_Status = {
	'COMPLETED': { value: 'Completed', next: 'DUE', color: 'green' },
	'DUE': { value: 'Due', next: 'COMPLETED', color: 'lightblue' },
}

export default class Status extends Component {

	constructor ( props ) {
		super( props )
		this.state = {
			status: props.initialStatus
		}
		this.handleTaskStatus = this.handleTaskStatus.bind( this );
	}

	handleTaskStatus () {
		this.setState(
			( prevState ) => {
				return {
					...prevState,
					status: E_Status[ prevState.status ].next
				}
			},
			() => console.log( "chnaged status", this.state )
		)
	}

	render () {
		const statusStyle = {
			height: '50px',
			width: '30px',
			backgroundColor: `${ E_Status[ this.state.status ].color }`
		};
		return (
			<div>
				<div onClick={ this.handleTaskStatus } style={ statusStyle }></div>
			</div>
		)
	}
}
