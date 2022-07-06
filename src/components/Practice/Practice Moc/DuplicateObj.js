import React from 'react'

const DuplicateObj =()=>{
    const obj =[
        {name:'tom', age: 20},
        {name:'tom', age: 20},
        {name:'jerry', age: 22},
        {name:'nobitha', age: 24},
        {name:'sunio', age: 21},
        {name:'sunio', age: 20},
        {name:'sunio', age: 20},
    ]
    const copyobj = obj.filter((val,idx,self)=>(
        idx ===self.findIndex((x)=>(
            x.name ===val.name && x.age===val.age
        ))
    ))
    console.log("copy of object is ",copyobj);

    return(
        <div>
            {copyobj.map((val,idx)=>{
            return <p key={idx}>name is {val.name} and age is {val.age}</p>
            })}
        </div>
    )
}
export default DuplicateObj