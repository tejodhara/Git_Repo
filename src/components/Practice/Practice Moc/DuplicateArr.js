import React from 'react'

const DuplicateArr =()=>{
    const arr =[1,3,6,8,4,77,4,0,5,7,0,3,1]
    let ars=[]
    const arrDuplicate =[]
    arr.filter((val)=>{
        let ispresent = ars.includes(val)
        if(!ispresent){
            ars.push(val)
            return true
        }else{
            arrDuplicate.push(val)
            return false
        }
    })
    console.log('arrN',ars);
    console.log('arrDuplicate',arrDuplicate);

    return(
        <div>

        </div>
    )
}
export default DuplicateArr