import React, { useState } from 'react';
import NoteContext from './noteContext';


function NoteState(props) {
  const host = "http://localhost:5000/"
  // const history = useNavigate();
  // const initialNote = [];

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const url = `${host}notes/fetchnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem('token'),
        "Content-Type": "application/json"
      }
    })
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  const addNote = async (title, description, tag) => {
    const url = `${host}notes/addnote`;
    const response = await fetch (url,{
      method: "POST",
      headers: {
        "auth-token": localStorage.getItem('token'),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, tag})
    })
    const json = await response.json();
    // console.log(json)
    setNotes(notes.concat(json))
    
  }

  const deleteNote = async (id) => {
    const url = `${host}notes/deletenote/${id}`
    const response = await fetch(url,{
      method: "DELETE",
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    });
    // console.log(response);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  }

  const updateNote = async (id, title, description, tag) => {
    // console.log(note);
    // const {_id, title, description, tag} = note
    const url = `${host}notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "auth-token": localStorage.getItem('token'),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, tag})
    })
    const json = await response.json();
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, updateNote, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
