import React from 'react'

const ParToChild =()=>{
    return(
        <div>
            <p>Hello world</p>
            <Child />
            <Child name='sai'/>
        </div>
    )
}

const Child =(props)=>{
    return(
        <div>
            <p>Hi parent {props.name}</p>
        </div>
    )
}

export default ParToChild