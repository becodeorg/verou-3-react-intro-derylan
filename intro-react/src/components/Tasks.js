import React from 'react'
import TaskList from './TaskList'

const Tasks = ({ tasks, toggleTask }) => {
    return (
        <>
                {tasks.map((taskList) => (
                    
                        <TaskList key={taskList.id} taskList={taskList} toggleTask={toggleTask}  />
                    
                ))}
        </>
    )
}

export default Tasks