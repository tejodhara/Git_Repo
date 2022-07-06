import React from 'react'
import { createStore } from 'redux';


const Redux_comp = () => {

    function couneterReducer(state={value:0},action){
        switch(action.type){
            case 'counter/incremented':
                return {val: state.value+1}
            case 'counter/decremented':
                return {val: state.value-1}
                default:
                    return state
        }
    }

    let store= createStore(couneterReducer)

    store.subscribe(()=>{console.log(store.getState());})
    store.dispatch({type:"counter/incremented"})
    store.dispatch({type:"counter/incremented"})

    store.dispatch({type:'counter/decremented'})
  return (
    <div>
        
    </div>
  )
}

export default Redux_comp