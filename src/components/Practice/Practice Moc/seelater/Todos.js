import React, { useRef, useState, useEffect } from 'react'

const Todos = () => {
  const [notes, setnotes] = useState({note:'',note1:""})
  const [data, setdata] = useState([])

  let inputRef = useRef('demo')
  useEffect(()=>{
    // focusInput()
  },[])


  let focusInput =() =>{
      inputRef.current.focus();
  }

  let changes =(e)=>{
    setnotes({
      ...notes,
      [e.target.name]:e.target.value
    })
  }
  let saveData=()=>{
    data.push(notes);
    setnotes('')
  }
  return (
    <div>
        <label >Notes <input type='text'  placeholder='enter note' name='note' value={notes.note} onChange={changes}/></label>
        {/* <label >Notes <input type='text' ref={inputRef} placeholder='enter note' name='note1' value={notes.note1} onChange={changes}/></label> */}
        <button onClick={saveData}>save</button>
        {data.map((val,idx)=>{return <p key={idx}>{val.name}</p>})}
        <div>
          
        </div>
    </div>
  )
}

export default Todos