import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import './App.css';
import CreateNoteArea from './components/CreateNoteArea';
import Modal from './components/Modal';

function App() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState("");

  function addNote(newNote) {
    if (newNote.title && newNote.content !== "") {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
      setError(""); //This hides the error message if it's initially displayed
    } else {
      setError("Ooops!!! Enter a title & some note...");
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function updateNote(id, updatedNote) {
    setNotes((prevNotes) => {
      return prevNotes.map((noteItem, index) => {
        if (index === id) {
          return {
            ...noteItem,
            ...updatedNote
          };
        }
        return noteItem;
      });
    });
  }

  // Implementing localStorage with useEffect Hooks
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      setNotes(notes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='container'>
      <Header />
      <div className='keeper-app-body'>
        <CreateNoteArea addNote={addNote} errorMessage={error} />
        {notes.map((noteItem, index) =>
          <Note
            id={index}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            deleteNote={deleteNote}
            updateNote={updateNote} // Pass the updateNote function as a prop
          />
        )}
        {/* <Modal /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
