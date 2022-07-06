
let sub_cake= 'sub_cake'
let add_cake= 'add_cake'
const redux = require('redux')

const createstore = redux.createStore;
function subCake(qty=1){
    return{
        type: sub_cake,
        quantity: qty,
    }
}
function addCake(qty=1){
    return{
        type: add_cake,
        quantity: qty,
    }
}

let inigialState = {
    cake: 10,
}

const reducerfun = (state=inigialState,action)=>{
    switch(action.type){
        case sub_cake:
            return {
                cake: state.cake - action.quantity,
            };
        case add_cake:
            return {
                cake: state.cake - action.quantity,
            };
        default:
            return state
    }
}

const store = createstore(reducerfun);
let get =() =>console.log(store.getState().cake);
let sub =(a) => store.dispatch(subCake(a))
let add =(a) => store.dispatch(addCake(a))

get()
sub(2)
add(1)
get()