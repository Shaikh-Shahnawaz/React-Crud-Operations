import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function AddEditModal({open, handleClose, handleOpen, createRestaurant}) {

    const [state,setState] = useState("");

    function handleChange(event){

        setState(event.target.value)
    }

    function handleClick(){

        createRestaurant(state)
    }
   
    return (
        <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <TextField id="outlined-basic" onChange={handleChange} label="Restaurant Name" variant="outlined" /> <br/>

        <Button onClick={handleClick} style={{  marginTop: 15 }} variant="outlined">Create New</Button>
        </Box>
      </Modal>
    </div>
    )
}

export default AddEditModal

