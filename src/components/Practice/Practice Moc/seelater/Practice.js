import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [colo, setcolo] = useState(0)
    const [nameInput, setnameInput] = useState({name:''})
    const [data, setdata] = useState([])
    let color = ['red','blue','green','brown','blue','red','blue','green','brown']
    let name=['Teja','Sai','Venkat','tvs']
    // let text ='hi hello'
    // let encoded = btoa(text)
    // let decoded = atob(encoded)

    // useEffect(() => {
        
    //     oncursmove()
    //     return () => {
        
    //     }
    // }, [])

    let changes =()=>{
        if(colo<color.length)
            setcolo(colo+1)
            else
            setcolo(0)
    }
    let inchange=(e)=>{
        setnameInput({
            ...nameInput,
            [e.target.name]: e.target.value
        })
    }
    let oclikc=()=>{
        data.push(nameInput)
        console.log(data);
        setnameInput({name:''})
    }
  return (
    <div>
        {/* <p>encoded text :{encoded}</p>
        <p>decoded text :{decoded}</p> */}
        {/* <table>
            <tr >
                <td style={{backgroundColor:color[colo]}}>{name[0]}</td>
                <td style={{backgroundColor:color[colo+1]}}>{name[1]}</td>
                <td style={{backgroundColor:color[colo+2]}}>{name[2]}</td>
                <td style={{backgroundColor:color[colo+3]}}>{name[3]}</td>

                {name.map((val,idx)=>{return <td key={idx} style={{backgroundColor:color[colo]}}>{val}</td>})}
            </tr>
        </table>
        <button onClick={changes}>click me</button> */}


        <label> <input type='text' name='name' value={nameInput.name} onChange={inchange}/></label>
        {/* {nameInput.map((val)=><p>{val}</p>)} */}
        {/* <p>{nameInput.name}</p> */}
        <button onClick={oclikc}>clickme </button>
        <table style={{margin:'auto'}}><thead><tr><th>name</th></tr></thead><tbody>{data.map((val,idx)=>{return <tr> <td key={idx}>{val.name}</td></tr>})}</tbody></table>
    </div>
  )
}

export default Practice