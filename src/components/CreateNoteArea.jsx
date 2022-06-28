import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";

const CreateNoteArea = (props) => {
    const [inputNote, setInputNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(e){
        const{name, value} = e.target;

        setInputNote( prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    };
    
    function submitNote(e){
        props.addNote(inputNote);
        setInputNote({
            title: "",
            content: ""
        });
        e.preventDefault();
    }
    return (
        <div>
            <p className='error-message'>{props.errorMessage}</p>
            <form className='create-note'>
                <input
                    name='title'
                    value={inputNote.title}
                    placeholder='Title'
                    onChange={handleChange}
                />
                <textarea 
                    name='content'
                    onChange={handleChange} 
                    value={inputNote.content} 
                    placeholder='Take a note...' 
                    rows="3" 
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateNoteArea;