import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Note = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [noteContent, setNoteContent] = useState({
    title: props.title,
    content: props.content
  });

  function handleDelete() {
    props.deleteNote(props.id);
  }

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
        <button onClick={handleUpdate} style={{ color: '#f5ba13', border: 'none', width: '50px', height: '30px'}}>Update</button>
      </div>
    );
  }

  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className='note-actions'>
        <button onClick={handleEdit}>
          <EditIcon />
        </button>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
