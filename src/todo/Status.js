import React, { Component } from 'react'
import Wrapper from '../util/Wrapper';

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
			}
		)
	}

	render () {
		const statusStyle = {
			height: '50px',
			width: '30px',
			backgroundColor: `${ E_Status[ this.state.status ].color }`
		};
		return (
			<Wrapper>
				<div onClick={ this.handleTaskStatus } style={ statusStyle }></div>
			</Wrapper>
		)
	}
}
