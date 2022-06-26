import React from 'react';

const Notes = (props) => {
    function handleDelete(){
        props.deleteNote(props.id);
    }
    return(
        <div className='note'>
            <h1>{props.title} </h1>
            <p> {props.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Notes;