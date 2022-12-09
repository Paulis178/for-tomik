import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import {BsSuitHeart} from "react-icons/bs";
import React, { useEffect, useState } from "react";
import CreateTodoField from './CreateTodoField';

const data = [
{
  _id: 'dfdf',
  title: 'Помыть посуду',
  isCompleted: false,
},
{
  _id: 'dfdfdf',
  title: 'Создать приложение',
  isCompleted: false,
},
{
  _id: 'dfdfgg',
  title: 'Завести блог',
  isCompleted: false,
}
]

function App() {
  const[todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id => 
    setTodos([...todos].filter(t => t._id !== id))

  return (
    <div className='bg-stone-900 h-auto min-h-screen text-white px-10 py-5 mx-auto'>
      <h1 className='flex items-center pb-10 justify-center text-2xl'>For Tomik<BsSuitHeart className='ml-2'/></h1>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} 
        removeTodo={removeTodo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
}

export default App;