import React, { useState } from 'react'

const PractBtn = () => {
    const [first, setfirst] = useState([{
        name:'',
        age:'',
        number:'',
        date:''
    }] )
    const chane=(e)=>{
        e.preventDefault();
        setfirst({
            ...first,
            [e.target.name]:e.target.value
        })
    }
    const saveData =()=>{
        localStorage.setItem('data',first)
        alert(`your name is ${first.name}`)}
    console.log(first);
  return (
    <div className='beff'>
        <p></p>
        {/* <p>{first}</p> */}
        <label>Name</label>
        <input  type='text' value={first.name} name='name' onChange={chane}/>
        <label>age</label>
        <input  type='number' value={first.age} name='age' onChange={chane}/>
        <label>number</label>
        <input  type='text' value={first.number} name='number' onChange={chane}/>
        <label>date</label>
        <input  type='date' value={first.date} name='date' onChange={chane}/>

        
        <button onClick={saveData}>tuch me</button>
    </div>
  )
}

export default PractBtn