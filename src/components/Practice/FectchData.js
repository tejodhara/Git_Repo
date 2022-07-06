import React, { useEffect, useState } from 'react'

function FectchData() {
    const [search, setsearch] = useState('')
    const [mydata, setmydata] = useState([])

    const url = 'https://api.github.com/users'
    useEffect(()=>{
      let fetchData = async()=>{
          let fData = await fetch(url)
          var data  = await fData.json()
          setmydata(data)
          console.log("Data",data)
          // data.map((val)=>{ return console.log(val.login)})
          console.log("lenght",data.length);
      }
      fetchData()
    },[])
    // let dataChange=(e)=>{
    //   // e.preventDefault();
    //     setsearch({
    //         // ...search,
    //         [e.target.name]: e.target.value,
    //    })
    // }

    let x= mydata
    for(let i=0;i<mydata.length;i++){
      if(mydata[i].startWith(x,0)===true){
        console.log(mydata[i]);
      }
    }

  return (
    <div>
        <lebel> Search</lebel>
        <input type='search' role='combobox' value={search} name='search' onChange={(e)=>setsearch(e.target.value)}/>
        {mydata.map((val)=>{return (
        <p key={val.id}>{val.login}</p>
        )})}
    </div>
  )
}

export default FectchData