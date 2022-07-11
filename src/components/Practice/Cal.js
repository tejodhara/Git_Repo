import React from 'react'
import './Cal.css'


const Cal = () => {
    let arr=[1,2,3,4,5,6,7,8,9]
  return (
    <div>
        <h1>Cal</h1>
        <div className='box1,uni'>
        {/* value={data} */}
            <div>
                <input type='text' name='data' onClick={()=>{}} style={{width:'70px'}}/>
                <button onClick={()=>{}}>sub</button>
            </div>
            <table>
                <thead></thead>
                <tbody> 
                    <tr> 
                    {['∏',1,2,3,'+'].map((val,idx)=>{
                        return(
                            <td><button>{val}</button></td>
                        )
                    })}
                    </tr>
                    <tr> 
                    {['^',4,5,6,'-'].map((val,idx)=>{
                        return(
                            <td><button>{val}</button></td>
                        )
                    })}
                    </tr>
                    <tr> 
                    {['x!',7,8,9,'*'].map((val,idx)=>{
                        return(
                            <td><button>{val}</button></td>
                        )
                    })}
                    </tr>
                    <tr> 
                    {['s','e',0,'.','='].map((val,idx)=>{
                        return(
                            <td><button>{val}</button></td>
                        )
                    })}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Cal