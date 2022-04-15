import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid'
// import { stringify } from 'uuid';


const App = () => {
  const todoNameRef = useRef();

  const LOCAL_STORAGE_KEY = 'todoApp.todos';

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if(storedTodos) {
      setTodos(storedTodos);
    }
  }, [])

  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const handleAddTodo = (e) => {
    e.preventDefault();import React, { useState, useRef, useEffect } from 'react';
    // import './App.css';
    import { Header, Button, Tasks, CompleteTask } from './components';
    import {v4 as uuidv4} from 'uuid'
    
    
    function App() {
      const taskToDo = useRef();
      const LOCAL_STORAGE_KEY = 'taskApp'
      const [tasks, setTasks] = useState([]);
      // const [completeTask, setCompleteTask] = useState([]);
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
        const taskDone = tasks.filter(todoList => !todoList.complete);
        setTasks(taskDone) ;
      }
    
      // const handleDoneTask = () => {
      //   const displayCompleteTask = [...tasks];
      //   const oldTask = displayCompleteTask.find(oldTask => oldTask.id === id);
      //   oldTask.complete = !oldTask.complete;
      //   setCompleteTask(displayCompleteTask);
      //   console.log(displayCompleteTask);
      // }
    
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
            <CompleteTask onChange={''} />
          </div>
          <div></div>
        </div>
        </>
      )
    }
    
    export default App;
    
    let name = todoNameRef.current.value;
    if (name === '') {
      return;
    }
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null //Delete the value in the input box after submit
  }

  const handleClearTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <h1 className="text-3xl font-bold underline bg-blue-200">What do we have to do today?</h1>
    <input ref={todoNameRef} type="text" className='border-2' />
    <button className="border-2" onClick={handleAddTodo}>Add Todo</button>
    <button className="border-2" onClick={handleClearTodos}>Clear Complete Todo</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
