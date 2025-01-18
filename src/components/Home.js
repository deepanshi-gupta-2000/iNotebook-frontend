import React from 'react'
import AddNote from '../components/AddNote';
import DisplayNotes from '../components/DisplayNotes';

function Home() {
  return (
    <div style={{display: 'flex',height: 'auto', margin: '0px', overflow: 'hidden'}}>
  <div style={{flexGrow: '1'}}>
        <div >
          <AddNote/>
          <DisplayNotes />
        </div>
      {/* <div id='login-signup' style={{width: '50%', textAlign: 'center'}}>Login Form</div> */}
      
    </div>
    </div>
  )
}

export default Home
