import Task from './Task';

const TaskList = ( props ) => {
	
	return props.tasks.map( ( task, i ) => (
		<Task key={ i } status={ task.status } text={ task.text } />
	) )
}

export default TaskList;