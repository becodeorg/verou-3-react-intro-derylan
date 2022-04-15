import React from 'react'
// import { FaTimes } from 'react-icons/fa' 

const TaskList = ({ taskList, toggleTask }) => {
    const handleTask =() => {
        toggleTask(taskList.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={taskList.complete} onChange={handleTask} />
                {taskList.name}
                {/* <FaTimes style={{ color: 'red', cursor: 'pointer'}}/>  */}
            </label>
        </div>
    )
}

export default TaskList