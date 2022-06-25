import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';
import NoteArea from './components/CreateNoteArea';
import notes from './notesdb';


function App() {
  return (
    <div className='container'>
      <Header />
      <div className='keeper-app-body'>
        <NoteArea />
        {notes.map(noteItem =>
            <Note
              key={noteItem.key}
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
