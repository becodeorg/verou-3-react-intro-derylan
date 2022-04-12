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
    e.preventDefault();
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
