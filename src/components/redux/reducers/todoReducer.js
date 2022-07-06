const initialState = {
    list: [],
}
const todoReducer = (state = initialState, action) => {
    let { type, payload } = action
    switch (type) {
        case "ADD_TODO":
            return {
                ...state,
                list: [...state.list, payload],
            }
        case "DELETE_TODO":
            state.list.splice(payload, 1)
            return {
                ...state,
                list: [...state.list],
            }
        case "EDIT_TODO":
            
            return {}
        case "RESET_TODO":
            return {
                list: []
            }
        default:
            return state
    }
}
export default todoReducer;