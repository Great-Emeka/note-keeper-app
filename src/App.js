import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';
import CreateNoteArea from './components/CreateNoteArea';


function App() {
  const[notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  function addNote(newNote){
    if(newNote.title && newNote.content !== ""){
      setNotes( (prevNotes) =>{
        return [...prevNotes, newNote]
      });
      setError(""); //This hides the error message if it's initially displayed
    }else{
      setError("Ooops!!! Enter a title & some note...");
    }
  };

  function deleteNote(id){
    setNotes( (prevNotes) =>{
      return prevNotes.filter((noteItem, index) =>{
        return index !== id
      });
    });
  }
  return (
    <div className='container'>
      <Header />
      <div className='keeper-app-body'>
        <CreateNoteArea addNote={addNote} error={error}/>
        {notes.map((noteItem, index) =>
            <Note
              id={index}
              key={index}
              title={noteItem.title}
              content={noteItem.content}
              deleteNote = {deleteNote}
            />
          )
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
