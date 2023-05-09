import { useState } from "react";
import { generate as id } from "shortid";

import Buttons from "./components/Buttons";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: id(),
      title: "Note title",
      text: "Empty",
      date: new Date(Date.now()).toLocaleDateString("uk-Ua", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setActiveNote(newNote.id);
    setNotes([newNote, ...notes]);
    setEditMode(false);
  };

  const onDeleteNote = () => {
    setNotes(notes.filter((note) => note.id !== activeNote));
    setActiveNote(false);
    setEditMode(false);
  };

  const onEditMode = () => {
    setEditMode(true);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotesArray);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="container">
      <div className="header">
        <Buttons
          onAddNote={onAddNote}
          activeNote={activeNote}
          onDeleteNote={onDeleteNote}
          onEditMode={onEditMode}
          editMode={editMode}
        />
        <SearchBox />
      </div>
      <div className="main">
        <Sidebar
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          setEditMode={setEditMode}
        />
        <Workspace
          getActiveNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
          editMode={editMode}
        />
      </div>
    </div>
  );
}

export default App;
