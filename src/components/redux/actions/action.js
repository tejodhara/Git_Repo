import axios from "axios"
import { ADD_TODO, DELETE_TODO } from "./types"

export const addTodo = (data) => {
    // console.log("addTodo >>", data)
    return {
        // type: ADD_TODO,  
        type: "ADD_TODO",
        payload: data
    }
}
export const deleteTodo = (data) => {
    // console.log("deleteTodo >>", data)
    return {
        // type: DELETE_TODO,
        type: "DELETE_TODO",
        payload: data
    }
}

export const editTodo = (data) => {
    console.log("editTodo >>", data)
    return {
        // type: EDIT_TODO,
        type: "EDIT_TODO",
        payload: data
    }
}
export const resetTodo=()=>{
    return {
        type:"RESET_TODO",
    }
}

export let fetchApi=()=>{
    return async (dispatch)=>{
        let response=await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log("res",reponse.data)
        dispatch(setUsers(response.data))
    }
}

export let setUsers=(data)=>{
    console.log("data >>",data)
    if(data){
        return {
            type:"SET_USER",
            payload:data
        }
    }
    else{
        return{
            type:"SET_USER",
            payload:[]
        }
    }
}





