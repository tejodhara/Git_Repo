import React from 'react'
import { useState } from 'react';

const ChildToPar =() =>{
    const [first, setfirst] = useState('')
    const chocklet=(text)=>{
        console.log(text);
        setfirst(text)
    }
    return(
        <div>
            <p>Hello Parent</p>
            <Child chocklet={chocklet}/>
            <p>Text from child {first}</p>
        </div>
    )
}

const Child=(props) =>{
    let text ='nice chocklet'
    return (
        <div>
                <p>I want chocklet </p>
                <button onClick={()=>{props.chocklet(text)}}>click</button>
        </div>
    )
}

export default ChildToPar