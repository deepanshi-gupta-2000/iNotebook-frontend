import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom";
import NoteState from './context/notes/NoteState';


function App() {
  // const navigate = useNavigate();
  return (
    <>
    
      <NoteState>
      
        <Navbar />
        
        <Outlet />
       
      </NoteState>
      

    </>
  );
}

export default App;
