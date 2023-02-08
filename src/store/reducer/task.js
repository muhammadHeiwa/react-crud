const initialState = {
    todos:[
        {
            id: 1,
            title: "Chanting a Spell"
        }
    ]
}

const task = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        default:
            return state
        case "ADD_TASK_REQUEST":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            return{
                ...state,
                todos: [...state.todos, newItem]
            }
        case "DEL_TASK_REQUEST":
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            }
        case "UPDATE_TASK_REQUEST":
            return {
                ...state,
                todos: payload
            }
    }
}

export default task;