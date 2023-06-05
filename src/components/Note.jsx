import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Modal from "./Modal";
import Backdrop from './Backdrop';

const Note = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [noteContent, setNoteContent] = useState({
    title: props.title,
    content: props.content
  });

  const handleDelete = () => {
    setModalIsOpen(true);
    // props.deleteNote(props.note.id);
  };

  function handleEdit() {
    setEditMode(true);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  }

  function handleUpdate() {
    props.updateNote(props.id, noteContent);
    setEditMode(false);
  }

  const handleRemoveBackdrop = () =>{
    setModalIsOpen(false)
  }

   //Does the actual deleting upon clicking confirm 
   const handleConfirmDelete = () => {
    props.deleteNote(props.id);
    setModalIsOpen(false);
  };

  if (editMode) {
    return (
      <div className='note'>
        <input
         style={{ backgroundColor: '#f9f9f9', border: '2px solid #f5ba13'}}
          type='text'
          name='title'
          value={noteContent.title}
          onChange={handleInputChange}
        />
        <textarea className='note.edit-mode'
         style={{ backgroundColor: '#f9f9f9', width: '100%', border: '2px solid #f5ba13', marginTop: '10px'}}
          name='content'
          value={noteContent.content}
          onChange={handleInputChange}
        />
        <button onClick={handleUpdate} className='note-button' style={{ color: '#f5ba13', border: 'none', width: '50px', height: '30px'}}>Update</button>
      </div>
    );
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className='note-actions'>
        <button onClick={handleEdit} className='note-button'>
          <EditIcon />
        </button>
        <button onClick={handleDelete} className='note-button'>
          <DeleteIcon />
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={handleRemoveBackdrop} onConfirm={handleConfirmDelete}/>
      )}
      {modalIsOpen && <Backdrop onCancel={handleRemoveBackdrop} />}
    </div>
  );
}

export default Note;
