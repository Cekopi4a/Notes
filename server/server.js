const express = require('express')
require('dotenv').config
const cors = require('cors');


const PORT = process.env.PORT || 5050;
const app = express();


app.use(express.json());
app.use(cors());


let notes = [];

app.get('/allNotes', (req,res) => {
    res.json(notes);
});

app.post('/addNote',(req,res) =>{
    const {content} = req.body;

    const newNote = {
        id:Math.random(),
        content,
    };
    notes.push(newNote);
    res.status(201).json(newNote)
    })

app.delete('deleteNote/:id', (req,res) => {
    const noteId = parseInt(req.params.id);
    const noteIndex = notes.findIndex(n => n.id === noteId);

    if(noteIndex === -1) {
        return res.status(404).json({message:'Not Found'});
    }

    notes.splice(noteIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})