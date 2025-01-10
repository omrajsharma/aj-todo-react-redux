import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state => state.todos));

  console.log(todos);

  return (
    <ol>
        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ol>
  )
}

export default TodoList