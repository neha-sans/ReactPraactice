import React from 'react';
import Status from './Status'

const Task = ( props ) => {
	return (
		<div style={ { display: 'flex', width: '100%', marginBottom: '5px', marginRight: '5px', alignItems: 'center' } }>
			<Status initialStatus={ props.status } />
			<div>{ props.text }</div>
		</div>
	)
}

export default Task;
