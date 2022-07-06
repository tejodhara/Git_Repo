import React from 'react'

const StringRev1 =()=>{
    let str = 'string'
    let strrev = ''
    //Method 1
    for(let i=str.length-1;i>=0;i--){
        strrev += str[i]
    }
    console.log('strrev method1',strrev);

    // Method2 
    console.log('Method2 using string inbuild method', str.split('').reverse().join(''));

    //Method3
    console.log("Method3 using inbuild methods and spread operator", [...str].reverse().join(''))
    return(
        <div>

        </div>
    )
    
}

export default StringRev1