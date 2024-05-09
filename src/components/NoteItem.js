import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note, editNote} = props;

    return (
        <div>
            <div className="card mx-2" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => {editNote(note)}}></i>
                    <i className="fa-solid fa-trash mx-2" onClick={() => {deleteNote(note._id)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
