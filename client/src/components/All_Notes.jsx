import { useState,useEffect } from "react";

function All_Notes () {

    const [notes,setNotes]=useState([]);


      useEffect(() => {
        fetch('http://localhost:5050/allNotes')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setNotes(data);
          });
      }, []);

      // const deleteNote = async (id) => {
      //       try {
      //         const response = await fetch(`http://localhost:5050/deleteNote/${id}`, {
      //           method: 'DELETE',
      //         });
          
      //         if (!response.ok) {
      //           throw new Error('Network response was not ok');
      //         }
      //         setNotes(notes.filter(note => note.id !== id));
      //       } catch (error) {
      //         console.error('Error:', error);
      //       }
      //     };

        //   const editNote = async (id,updateContent) => {
        //     const note = { content:newNote};
        //         try {
        //           const response = await fetch('http://localhost:5050/updateContent/${id}', {
        //             method: 'PUT',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify(note)
        //           });
              
        //           if (!response.ok) throw new Error('Network response was not ok');
                  
        //           const data = await response.json();
        //           console.log('Note created:', data);
        //         } catch (error) {
        //           console.error('Error:', error);
        //         }
        //       };
              
          


    return(
        <>
         <h1>All Notes</h1>
         <ul>
       {notes.map((note) => (
         <li key={note.id}>{note.content}
         <button onClick>Delete Note</button>
         <button onClick>Edit Note</button>
         </li>
     ))}
  </ul>

</>
    )
}

export default All_Notes;