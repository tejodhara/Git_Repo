import React, { useState } from 'react'
import { useEffect } from 'react'
import './P1.css'
// import img from '../../../assers/a.jpg'
// import img from './assers/a.jpg'

const P1 = () => {
    let [count, setcount] = useState(0)
    let [text, settext] = useState('val')
    let apha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r']
let arr2=[]
    // let x= '3x+4y+5'
    // let y= x.split('+')
    // let z= y.map((val)=> val.charAt(0))
    // let sum=0
    // z.map((val)=>sum +=parseInt(val))
    // console.log(sum)    //12

    // console.log(Math.ceil(Math.random()*100))

    // let date = new Date()
    // console.log(Date())
    // console.log(parseInt(date.getTime()));

    useEffect(()=>{
        setInterval(()=>{
            if(count<apha.length){
                setcount(count++)
            }else{
                setcount(0)
            }

        },2000)
        
    },[])

    // let fun3=()=>{
    //     setInterval(()=>{
    //         console.log(`fun${count} is execured in the prgram ${count}`);
    //         setcount(x++)
    //     },3000)
    // }

    return (
    <div>
        <nav className='navBag'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Course</a></li>
                <li><a href='#'>Link</a></li>
                <li><a href='#'>Blog</a></li>
            </ul>
        </nav>
        <p className='par1'>javascript is a scripting lanaguage as well as programming language ::selection It is used to make dynamic web pages </p>
        <p className='settime'> setTimeout interval </p>
      {/* <img src={require(`./assers/${apha[count]}.jpg`)} className='images' alt='/' /> */}
      <div  className='div2'>
        Hello
        <p>Enter your name <input type='text' name='name' value={text} onChange={(e)=>{settext(e.target.value)}}/> </p>
        <p>Enter your dob <input type='date'/> </p>
        
      </div>
    </div>
  )
}

export default React.memo(P1)