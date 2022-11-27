import './App.css';
import Sidebar from './Sidebar';
import Editor from './Editor';
import { useState } from 'react';


function App() {
  /* States */
  const [notes, setNotes] = useState([]);
  const [index, setIndex] = useState(-1);
  const [editing, setEditing] = useState(false);


  /* Select note. */
  const selectNote = (i) => {setIndex(i);};

  /* Add new note. */
  const addNewNote = () => {
    setNotes([...notes, {
      title: '',
      preview: '',
      text: '',
    }]);
    setEditing(true);
    setIndex(index + 1);
  };

  /* Update note. */
  const updateNote = (i, text) => {
    /* Extract the title. */
    let title;
    let line = text.split('\n', 1)[0].trim();
    if(line[0] === '#') {
      /* Remove the '#' and all spaces. */
      title = line.slice(1).trimStart();
    }
    else {
      title = '';
    }

    /* Calculate the new state. */
    let newNote = {
      title: title,
      preview: text.slice(0, 120),
      text: text,
    };

    /* Update the state. */
    setNotes(notes.map((item, ii) => {
      if(i === ii)
        return newNote;
      else
        return item;
    }));

    /* Disable editing */
    setEditing(false);
  }


  return (
    <div className="App">
      <Sidebar
        notes={notes}
        index={index}
        selectNote={selectNote}
        addNewNote={addNewNote}
      />
      <Editor
        note={index>0 ? notes[index]:{}}
        index={index}
        editing={editing}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;
