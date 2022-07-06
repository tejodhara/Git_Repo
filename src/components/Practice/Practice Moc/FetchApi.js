import { hover } from '@testing-library/user-event/dist/hover'
import React, { useEffect, useState } from 'react'

const FetchApi =() =>{
    const [fetchedData, setfetchedData] = useState([])
    let url ='https://jsonplaceholder.typicode.com/users'
    
    useEffect(()=>{
        let fetchUrl = async()=>{
            let fetchData = await fetch(url);
            let data = await fetchData.json();
            console.log(data);
            setfetchedData(data)
        }
        fetchUrl();
    },[])

    const styleTable={
        border:'1px solid black',
        cellSpaceing:'0',
        cellPadding:'0px',
    }
    const styRow ={
        border:'1px solid black',
        padding:0,
        cellPadding:0,
        // borderCollapse :'collapse'
    }
    return(
        <div>
            <table style={styleTable}>
                <tbody>
                    {fetchedData.map((val)=>{
                        return (<><tr>
                        <td key={val.id} style={styRow}>{val.name}</td>
                        <td key={val.id} style={styRow}>{val.username}</td>
                        </tr>
                        </>)
                    })}
                </tbody>
            </table>

        </div>
    )
}
export default FetchApi