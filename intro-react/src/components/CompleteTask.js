import React from 'react'
import TaskList from './TaskList'
import { v4 as uuidv4 } from 'uuid'

const CompleteTask = ({ completeTask, onChange, handleDoneTask }) => {
    return (
        <div onChange={onChange}>
            <h2>Task completed:</h2>
                {completeTask.map((taskName) => (
                    
                    <p key={taskName.id}>{taskName.name}</p>
                
            ))}
        </div>
    )
}

export default CompleteTask