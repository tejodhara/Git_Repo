import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Input, Modal } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModelComp(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState({
    name1: "",
    age: '',
    phoneno:"",

  });
  const [oneData, setOneData] =React.useState({})
 

  let handleChange = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value,});

  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sendData =() =>{
    console.log(name);
    props.addData=name;
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.showAdd}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add Details
        </BootstrapDialogTitle>
        <DialogContent dividers >

      <FormControl sx={{ width: '50ch', }}>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" value={name.name1} name='name1' onChange={handleChange} />
       </FormControl> 
      <FormControl sx={{ width: '50ch'}} style={{ marginTop:'20px'}}>
          <InputLabel htmlFor="component-simple">Age</InputLabel>
          <Input id="component-simple" value={name.age} name='age' onChange={handleChange} />
       </FormControl> 
      <FormControl sx={{ width: '50ch'}} style={{ marginTop:'20px',}}>
          <InputLabel htmlFor="component-simple">Phone No</InputLabel>
          <Input id="component-simple" value={name.phoneno} name='phoneno' onChange={handleChange} />
       </FormControl> 
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={sendData}>
             Add
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </div>
  );
}
