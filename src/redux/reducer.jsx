import { ADD_TODO, TOGGLE_TODO } from "./action";

const initialState = {
    todos: []
}

/**
 * state = initialState
 * action: {
 *  type: "ADD_TODO",
 *  payload: "Dinner"
 * }
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
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
        default:
            return state;
    }
}

export default todoReducer;