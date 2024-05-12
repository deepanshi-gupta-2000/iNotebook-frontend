import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteItem from './NoteItem';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';
// import AddNote from './AddNote';

function DisplayNotes() {

  const context = useContext(noteContext);
  const { notes, fetchNotes, updateNote } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')){
      fetchNotes()
    }
    else{
      navigate('/login')
    }
    // fetchNotes()
  },)



  const editNote = (note) => {
    setNote({ id: note._id, title: note.title, description: note.description, tag: note.tag })
    modalbtnref.current.click();
  }

  const modalbtnref = useRef(null);
  const clsoebtnref = useRef(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // console.log('Updating the note...', note);
    await updateNote(note.id, note.title, note.description, note.tag)
    clsoebtnref.current.click();
    setNote({ title: "", description: "", tag: "" })
  }

  const [note, setNote] = useState({ id: "", title: "", description: "", tag: "default" })

  const handleOnchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
    // console.log(note.title, note.description);
  }

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary d-none" ref={modalbtnref} data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button ref={clsoebtnref} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Note Title</label>
                  <input type="title" className="form-control" id="title" name='title' aria-describedby="title" value={note.title} onChange={handleOnchange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Note Description</label>
                  <input type="description" className="form-control" name='description' id="description" value={note.description} onChange={handleOnchange} />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary" disabled={note.title.length < 3 || note.description.length < 5} onClick={handleSubmit}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h1>Your Notes</h1>
        <div className='d-flex flex-wrap'>
          {notes.map((note) => {
            return <NoteItem key={note._id} editNote={editNote} note={note} />
          })}
        </div>

      </div>
    </div>
  )
}

export default DisplayNotes;
