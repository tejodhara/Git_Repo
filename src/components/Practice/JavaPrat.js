import React from 'react'
import { useState } from 'react';

const JavaPrat = () => {
    // let x=[1,2,3,4,5,6,23,54]
    // let y=[3,1,877,23,5,0,3]
    // let c=[]
    // for(let i=0;i<x.length;i++){
    //     for(let j=0;j<y.length;j++){
    //         if(x[i]==y[j]&& c.indexOf(x[i])==-1){
    //             c.push(x[i])
    //         }
    //     }
    // }
    // console.log(c);
    
    // let x=5;
    // let y=''
    // for(let i=0;i<x;i++){
    //     for(let j=0;j<i;j++){
    //         y += 'x'
    //     }
    //     console.log(y);
    // }
    // console.log();
    
    // sum of values fo two arrays
    // let array1 = [1,0,2,3,4];
    // let array2 = [3,5,6,7,8,13];
    // let sum=[]
    // for(let i=0;i<array2.length;i++){
    //     sum.push((array1[i]||0)+(array2[i]||0))
    // }
    // console.log(sum);
    
    // nested currying
    // let mul=function(a){
    //     return function(b){
    //         return function(c){
    //             return a*b*c
    //         }
    //     }
    // }
    // // console.log(mul(2)(3)(4))
    // console.log(mul(4)(3)(6))
    
    // Generate Id by using button. Id should change everytime when we click the button
    const [id, setid] = useState([''])
    let i=1;
    let bthFun =() =>{
        setid([...id, uuid.v4()])
    }
    const uuid = require("uuid")
    console.log(uuid.v4());
    
    return (
    <div>
        {id.map((val)=><div key={i++}> <h4>{val}</h4> </div>)}
        <button onClick={bthFun}>clickme</button>
    </div>
  )
}

export default JavaPrat