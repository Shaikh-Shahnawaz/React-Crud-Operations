import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

// show modal --> false

function EditModal({ editName, showModal, modalInEdit, handleModalClose }) {

  // 'showModal' is also for modal toggle.... 'modalInEdit' is for toggle the modal by clicking on edit

// 'editName' --- it is function containg the axios for edit

  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false)
    modalInEdit(false)
  }

  const handleShow = () => setShow(true);

  useEffect(() => {

    setShow(showModal)

  }, [showModal])

 

  // ----------------------------------------------


  const [getData, setGetData] = useState('') // isme aa gya input ka data

  function handleChange(event) {

    setGetData(event.target.value)

  }

// This function get called when we click on update button

  function sendEditName() {

    editName(getData)
    setShow(false)
  }

//  ---------------------------------------------
      
  

  return (
    <div>

      {/* ============================[ Edit Modal ]============================ */}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Restaurant Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
            <input onChange={handleChange} type="text" class="form-control" placeholder="enter restaurant name" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendEditName}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditModal
