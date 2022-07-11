import React, { useState } from 'react'


const Counter = () => {
    let [count, setcount] = useState(0)

    let increment=()=>{
        setcount(count+=1)
    }
    let decrement=()=>{
        setcount(count-=1)
    }
  return (
    <div>
        <p>{count}</p>
        <button disabled={count>9} onClick={increment}>increment</button>
        <button disabled={count<1} onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter