import React from 'react';
import Wrapper from '../util/Wrapper.js';
import Status from './Status'

const Task = ( props ) => {
	return (
		<>
			<Status initialStatus={ props.status } />
			<div>{ props.text }</div>
		</>
	)
}

export default Task;
