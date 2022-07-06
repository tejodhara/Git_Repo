let initialState=[]
let usersReducer=(state=initialState,action)=>{
    let {type,payload}=action
    switch(type){
        case "SET_USER":
            return [...payload]
        default: return state
    }

}

export default usersReducer