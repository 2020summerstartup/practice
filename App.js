import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import { uuid } from 'uuidv4'

const LOCAL_STORAGE_KEY = 'todoApp.Todos'

function App() {
  const [Todos, setTodo] = useState([])
  const todoNameRef = useRef()

  useEffect(()=>{
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    console.log(storedTodo)
    if (storedTodo) setTodo(storedTodo)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Todos))
  }, [Todos])

  function toggleTodo(id){
    let newTodos = [...Todos]
    let newTodo = newTodos.find((todo) => todo.id === id)
    newTodo.complete = !newTodo.complete
    setTodo(newTodos)
  }

  function handleAddTodo(e){
    const todoName = todoNameRef.current.value
    if (todoName === "") return
    todoNameRef.current.value = null
    setTodo(prevTodos => {
      return [...prevTodos, {id:uuid(), name: todoName, complete:false,}]
    })
  }

  function handleClearTodo(e){
    const newTodos = Todos.filter((todo) => !todo.complete)
    setTodo(newTodos)
  }

  return (
    <>
    <TodoList todos={Todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodo}>Clear Completed Todo</button>
    <div>{Todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
