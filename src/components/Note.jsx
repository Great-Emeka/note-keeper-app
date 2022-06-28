import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Notes = (props) => {
    function handleDelete(){
        props.deleteNote(props.id);
    }
    return(
        <div className='note'>
            <h1>{props.title} </h1>
            <p> {props.content}</p>
            <button onClick={handleDelete}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Notes;