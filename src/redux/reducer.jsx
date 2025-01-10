import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "./action";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                ...state,
                todos: [
                    ...state.todos, 
                    {id: state.todos.length, text: action.payload, completed: false}
                ]
            }
        case TOGGLE_TODO: 
            return {
                ...state,
                todos: state.todos.map(
                    todo => todo.id == action.payload 
                    ? {...todo, completed: !todo.completed} 
                    : todo
                )
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(
                    todo => todo.id == action.payload.id
                    ? {...todo, text: action.payload.newText} 
                    : todo
                )
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(
                    todo => todo.id != action.payload)
            }
        default:
            return state;
    }
}

export default todoReducer;