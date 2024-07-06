// EditTodoModal.js
import React, { useState , useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/slices/tasksSlice';
import { Modal, Button, Form } from 'react-bootstrap';

const EditTodoModal = ({ setShowModal , show, task }) => {
  const [text, setText] = useState(task.text);
// setInput text value for each task 
  useEffect(() => {
    if (task) {
      setText(task.text);
    }
  }, [task]);
  
  const dispatch = useDispatch();

//   dispatch edit function to perform omething
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: task.id, text }));
    handleClose();
  };
//   define function to close modal when click in button
  const handleClose = ()=>{
      setShowModal(false)
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTodoText" >
            <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)}/>
          </Form.Group>
          <Modal.Footer className='mb-2'>
            <Button variant="success p-0 px-2 mx-2" type="submit">Save  </Button>
            <Button variant="danger p-0 px-2" onClick={handleClose}>Cancel</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTodoModal;
