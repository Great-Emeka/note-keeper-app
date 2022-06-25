import React, { useState } from 'react';

const NoteArea = () => {
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
    }
    return (
        <div>
            <form>
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
                    placeholder='Take a note' 
                    rows="3" 
                />
                <button> Add </button>
            </form>
        </div>
    );
}

export default NoteArea;