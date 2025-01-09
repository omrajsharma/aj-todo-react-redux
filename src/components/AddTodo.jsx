import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/action';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if(text) {
          // dinner
            dispatch(
              addTodo(text)
            );
            setText('');
        }
    }

  return (
    <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='Add new todo'/>
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo