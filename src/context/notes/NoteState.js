import React, { useState } from 'react';
import NoteContext from './noteContext';



function NoteState(props) {
  const host = "http://localhost:5000/"
  // const initialNote = [];

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const url = `${host}notes/fetchnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzI3OTE4YzM2YTk4YzFjYmEyMjk5YyIsImlhdCI6MTcxNDY0NDUxNH0.3pePPTXUzZBReoyWbF8kHJsiG6Rw8WpsYDvuYw46WVQ",
        "Content-Type": "application/json"
      }
    })
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const url = `${host}notes/addnote`;
    const reponse = await fetch (url,{
      method: "POST",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzI3OTE4YzM2YTk4YzFjYmEyMjk5YyIsImlhdCI6MTcxNDY0NDUxNH0.3pePPTXUzZBReoyWbF8kHJsiG6Rw8WpsYDvuYw46WVQ",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, tag})
    })
    
  }

  const deleteNote = async (id) => {
    const url = `${host}notes/deletenote/${id}`
    const response = await fetch(url,{
      method: "DELETE",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzI3OTE4YzM2YTk4YzFjYmEyMjk5YyIsImlhdCI6MTcxNDY0NDUxNH0.3pePPTXUzZBReoyWbF8kHJsiG6Rw8WpsYDvuYw46WVQ"
      }
    });
    console.log(response);
  }

  const updateNote = () => {
    //Todo update Note
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
