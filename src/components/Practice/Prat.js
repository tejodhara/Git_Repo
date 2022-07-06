import React from 'react'
import './Prat.css'

function Prat() {
    const arr =['teja','tim','tomy','tonney','tejodhara']

    // const out=arr.filter(arr.length>4)
    const url = 'https://api.github.com/users'
    let fetch1 = async() =>{
      let resp = await fetch(url)
      let data = await resp.json();
      // console.log('data',data[0].login);
      data.map((val,idx) => <p key={idx}>{val} </p>)
    }
    fetch1();
    
  return (
    <div>
        {arr.map((val,idx)=>{return <p key={idx}> {val}</p>})}
        {
          // console.log(fetch1.data[1].login);
          // fetch1.data.map((val)=><p key={val.id}>{val.login} </p>)
        }
        <div className='div1'>
          <div className='div2'>
            <h1 className='header1'>Hello Teja</h1>
          </div>
        </div>
        

        <button className='beff'>click me </button>
    </div>
  )
}

export default Prat