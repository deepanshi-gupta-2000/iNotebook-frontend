import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

function AddNote() {
    const context = useContext(noteContext);
    const {addNote} = context;

    const handleSubmit = async (e) => {
        // console.log(note.title, note.description, note.tag);
        e.preventDefault();
        // console.log('Note submiting');
        await addNote(note.title, note.description, note.tag)
        // console.log('Note submitted'); 
        setNote({title: "", description: "", tag: ""})   
    }

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleOnchange = (e) => {
        setNote({...note,[e.target.name]: e.target.value})
        // console.log(note.title, note.description);
    }

    return (
        <div className='container my-3'>
            <h2>Add a note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="title" className="form-control" id="title" name='title' aria-describedby="title" minLength={3} required value={note.title} onChange={handleOnchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Note Description</label>
                    <input type="description" className="form-control" name='description' id="description" minLength={5} required value={note.description} onChange={handleOnchange}/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" disabled={note.title.length < 3 || note.description.length < 5} className="btn btn-primary" onClick={handleSubmit}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
