import React from 'react'

const RestOpe = () => {
    // rest operator
    function sum(...x){
        let y=0
        for(let i=0;i<x.length;i++){
            y +=x[i]}
        console.log(y)
    }
    sum(10,50,60,20,10)
  return (
    <div>RestOpe</div>
  )
}

export default RestOpe