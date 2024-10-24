import { useState } from "react";
import { json } from "react-router-dom";

function Form () {

const [newNote,setNewNote]=useState();
const [error, setError] = useState(null);



const AddNewNote = async () => {
    const note = { content:newNote};
        try {
          const response = await fetch('http://localhost:5050/addNote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
          });
      
          if (!response.ok) throw new Error('Network response was not ok');
          
          const data = await response.json();
          console.log('Note created:', data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      


    return(
        <>
        <h1>Add Note</h1>
<div>
    <input type="text"
    
    onChange={(e) => setNewNote(e.target.value)}
    />
    <button onClick={AddNewNote}>Add Note</button>
</div>
</>
    )
}

export default Form;