import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModelComp from './ModelComp';

function createData(name, age, phoneno) {
  return { name, age, phoneno };
}

const rows = [
  createData('Sai', 25, 8247802033),
  createData('Sam', 26, 8247802033),
  createData('Teja', 29, 8247802033),
  createData('Venkat', 25, 8247802033),
  createData('Tom', 25, 8247802033),
];

export default function BasicTable() {
  const [data,setData] =React.useState([])
  const [showAdd, setshowAdd] = React.useState(false)
  const [hideMod,sethideMod]  =React.useState(true)
  
  let showAddComp =() =>{
    setshowAdd(true)
  }
  
  let hideAddMod =() =>{
    sethideMod(false)
  }
  let addData = (data)=>{
    console.log(data);
    setData(data)
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400,  }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Phone No</TableCell>
            <TableCell align="right">
              <Button variant="contained" onClick={showAddComp}>Add</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.phoneno}</TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small">edit</Button> <br/> 
                <Button variant="contained" size="small">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModelComp  
      addDate={addData}
      showAdd={showAdd}
      hideAddMod={hideAddMod}/>
    </TableContainer>

    
  );
}
