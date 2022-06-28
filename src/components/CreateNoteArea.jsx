import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateNoteArea = (props) => {
    const [isExpanded, setExpanded] = useState(false);

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
                <Zoom in={isExpanded} >
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateNoteArea;