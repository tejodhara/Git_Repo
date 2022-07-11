import React, { useEffect, useState } from 'react'
import './Try1.css'

const Try1 = () => {
    let colors = ['red','orange','green','']
    const [get, setget] = useState(0)
    const [set, setSet] = useState(3)
    const [go, setgo] = useState(3)
    useEffect(()=>{
        setInterval(()=>{
            setInterval(()=>{
                // if(colors<3){
                    setget(0)
                    setSet(4)
                    setgo(4)
                // }
                setInterval(()=>{
                    setget(4)
                    setSet(1)
                    setgo(4)
                    setInterval(()=>{
                        // if(colors<3){
                            setget(4)
                            setSet(4)
                            setgo(2)
                        // }
                    },4000)
                },2500)
            },5000)
        },2000)


    },[])
  return (
    <div>
        <div className='fc1' style={{ backgroundColor: colors[get]}}></div>
        <div className='fc1' style={{ backgroundColor: colors[set]}}></div>
        <div className='fc1' style={{ backgroundColor: colors[go]}}></div>

    </div>
  )
}

export default Try1