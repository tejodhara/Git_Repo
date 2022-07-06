import React from 'react'
import './Gloin.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Stack } from '@mui/material';

const Gloin = () => {
    let alter = ['sai','teja','omt']
    let logo1 =[1,2,3]
    let logo2 =[1,2,3]
  return (
    <div>
        <div>
        <nav className='navB'> 
        <table><tbody><tr>
            <td>Gmail</td>
            <td>images</td>
            <td>Gmail</td>
            <td> <img /> </td>
            </tr></tbody></table>
            {/* <h6>Gmail</h6> 
            <h6>images</h6>
            <h6>Gmail</h6>
            <h6><img /></h6> */}
        </nav>
        </div>
        <div className='totalb'>
            <div><h1 className='h1font'>Google</h1></div>
            <div> <input prefix='icon' type='text' placeholder='Search Google or type a URL ' className='iptfield'/></div>
            <div className='logos'>
                {/* <table>
                    <tbody>
                        <tr> {logo1.map((val,idx) => {return <td key={idx}> {val}  </td>})}  </tr>
                        <tr> {logo2.map((val,idx) => {return <td key={idx}> {val}  </td>})}  </tr>
                    </tbody>
                </table> */}

                <Stack direction="row" spacing={3} style={{margin:'4px'}}>
                    {logo1.map((val,idx) => {return <Avatar alt={alter[idx]} src={val} />})}
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
                </Stack>
                <Stack  direction="row" spacing={3}>
                    {logo2.map((val,idx) => {return <Avatar alt="Sharp" src={val} />})}
                </Stack>
            </div>
        </div>       


        {/* <>
            <nav className='d-flex'>
                <b>Downloads</b>
                <input type='text' placeholder='Search Downloads' className='inputfield' />
            </nav>
            <span>
                <div className='box1'> 

                </div>
            </span>
        </> */}
    </div>
  )
}

export default Gloin