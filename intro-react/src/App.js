import React, { useState, useRef, useEffect } from 'react';
// import './App.css';
import { Header, Button, Tasks, CompleteTask } from './components';
import {v4 as uuidv4} from 'uuid'


function App() {
  const taskToDo = useRef();
  const LOCAL_STORAGE_KEY = 'taskApp'
  const [tasks, setTasks] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);
  const id = uuidv4();

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTask) {
      setTasks(storedTask);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const toggleTask = (id) => {
    const newTask = [...tasks];
    const oneTask = newTask.find(oneTask => oneTask.id === id);
    oneTask.complete = !oneTask.complete;
    setTasks(newTask);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    let name = taskToDo.current.value;
    if (name === '') {
      return;
    }
    setTasks(prevTask => {
      return [...prevTask, {id: id, name: name, complete: false}]
    })
    taskToDo.current.value = null;
  }

  const doneTask = () => {
    const taskDone = tasks.filter(taskList => !taskList.complete);
    const taskComplete = tasks.filter(taskList => taskList.complete)
    setTasks(taskDone);
    const copyCompleteTask = [...completeTask, taskComplete];
    setCompleteTask(copyCompleteTask);
  }

  const handleDoneTask = (id) => {
    const displayCompleteTask = [...tasks];
    const oldTask = displayCompleteTask.filter(oldTask => oldTask.complete === true);
    // oldTask.complete = !oldTask.complete;
    setCompleteTask(oldTask);
  }

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter((todoList) => todoList.id !== id));
  // }

  return (
    <>
    <div className="grid grid-cols-3 justify-center mt-5">
      <div></div>
      <div className='border-2 border-black text-center'>
        <Header headerName={"Today's To Do"} />
        <input className='border-2 border-black' type="text" ref={taskToDo} />
        <Button btnName={'Add'} onClick={handleAdd} />
        {tasks.length} <br />
        <Tasks tasks={tasks} toggleTask={toggleTask} />
        <Button btnName={'Complete'} onClick={doneTask} />
        <CompleteTask onChange={doneTask} handleDoneTask={handleDoneTask} />
      </div>
      <div></div>
    </div>
    </>
  )
}

export default App;
