import React, { useState } from 'react';

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
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateNoteArea;