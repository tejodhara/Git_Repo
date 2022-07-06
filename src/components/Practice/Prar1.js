import React, { useState } from 'react'

function Prar1() {

  const [name1, setname] = useState('')
  const [first, setfirst] = useState([])
 const str2 =['Mango','Banana','Grapes','Apple','Pappaya','PineApple','Almand']

 
 const fun1=()=>{
   let x =name1
   let y = name1.toUpperCase(x)
   for(let i=0;i<str2.length;i++){
     if(str2[i].startsWith(y,0)===true){
       console.log(str2[i]);
       setfirst(str2[i])
      }
   }
  }

  // console.log('first',first);
// console.log(name1);
  return (
    <div>
        <input type='text' value={name1} name='name1' onChange={(e)=>{setname(e.target.value)}}/>
        <button onClick={fun1}>ccc</button>
        {/* {first.map((val)=>{<p>{val}</p>})} */}
        <p>{first}</p>
    </div>
  )
}

export default Prar1