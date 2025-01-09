import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state => state.todos));

  return (
    <ol>
        {todos.map(todo => <li style={{color: 'blue'}}>{todo.text}</li>)}
    </ol>
  )
}

export default TodoList