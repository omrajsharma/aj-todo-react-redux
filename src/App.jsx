import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import PostsList from './components/PostList'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <TodoList />
        <PostsList />
      </div>
    </Provider>
  )
}

export default App