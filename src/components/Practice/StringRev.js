import React, { useState } from 'react'

const StringRev = () => {
    // const [data, setdata] = useState('teiodhara')
    let data ='reverse'
    let str ='';

    for(let i=data.length-1;i>=0;i--){
        str += data[i]
    }
    console.log(str)

    console.log('using in build functions');
    console.log(data.split('').reverse().join(''));
  return (
    <div>
        
    </div>
  )
}

export default StringRev