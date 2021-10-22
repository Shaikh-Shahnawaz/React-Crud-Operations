import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
function AddModal({ addName }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function openModal() {
    setShow(true)
  }

  const [input, setInput] = useState('');

  function handleChange(event) {
    setInput(event.target.value)
  }

  return (
    <div>
      {/* ============================[ Add Modal ]============================ */}

    
      <Button variant="primary" onClick={openModal}>
        Add Restaurant
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Restaurant Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
            <input onChange={handleChange} type="text" class="form-control" placeholder="Enter restaurant name" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addName(input)} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddModal
