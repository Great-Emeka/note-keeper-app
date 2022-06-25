import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';
import CreateNoteArea from './components/CreateNoteArea';
import notes from './notesdb';


function App() {
  const[notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes( (prevNotes) =>{
      return [...prevNotes, newNote]
    })
  }
  return (
    <div className='container'>
      <Header />
      <div className='keeper-app-body'>
        <CreateNoteArea addNote={addNote}/>
        {notes.map((noteItem, index) =>
            <Note
              id={noteItem.index}
              key={noteItem.index}
              title={noteItem.title}
              content={noteItem.content}
            />
          )
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;
