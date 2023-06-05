import React, { useState, useEffect } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateNoteArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    if (props.editNote) {
      setInputNote({
        title: props.editNote.title,
        content: props.editNote.content
      });
      setExpanded(true);
    } else {
      setInputNote({
        title: "",
        content: ""
      });
      setExpanded(false);
    }
  }, [props.editNote]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  };

  function submitNote() {
    if (props.editNote) {
      props.updateNote(props.editNote.id, inputNote);
    } else {
      props.addNote(inputNote);
    }
    setInputNote({
      title: "",
      content: ""
    });
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <p className='error-message'>{props.errorMessage}</p>
      <form className='create-note'>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={inputNote.title}
            placeholder="Title"
          />
        )}
        <textarea
          name='content'
          onClick={expand}
          onChange={handleChange}
          value={inputNote.content}
          placeholder='Take a note...'
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            {props.editNote ? "Update" : <AddIcon />}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNoteArea;
