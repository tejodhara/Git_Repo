import React, { useRef, useState } from 'react'

const T1 = () => {
    const [note, setnote] = useState({not:''})
    const [data, setdata] = useState([])
    const [fun, setfun] = useState()
    // let data =[]

    let refer =useRef()
    let refesh =()=>{
        refer.current.focus()
    }
    let changes=(e)=>{ 
        
        setnote({
            ...note,
            [e.target.name] : e.target.value,
            })
    }
    let clickme =()=>{

        data.push(note)
        console.log(data);
        setnote({not:''})
    }
    let edit=(id)=>{
        setnote(
            note.not=data[id],
            // setfun(refer.current.focus()),
        )

    }
    let delete1=(id)=>{
        data.splice(id,1)
    }

  return (
    <div>
        <label > Enter name <input ref={fun} type='text'  name='not' value={note.not} onChange={changes}/></label>
        <button onClick={clickme}>click me</button>
        <table>
           <thead><tr><th>Note</th></tr></thead> 
           <tbody>
        {data.map((val,idx)=>{
           return( 
           <tr key={idx}>
            <td>{val.not}</td>
            <td>
                <button onClick={()=>edit(idx)}>edit</button>
                <button onClick={()=>delete1(idx)}>del</button>
            </td>
            </tr>)
        })}</tbody>
        </table>
    </div>
  )
}

export default T1