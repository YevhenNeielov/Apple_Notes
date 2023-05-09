import { useEffect, useState } from "react";
import { generate as id } from "shortid";

import Buttons from "./components/Buttons";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  const [notes, setNotes] = useState(
    localStorage.storedNotes ? JSON.parse(localStorage.storedNotes) : []
  );
  const [activeNote, setActiveNote] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("storedNotes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: id(),
      title: "Note title",
      text: "Empty",
      date: Date.now(),
    };

    setActiveNote(newNote.id);
    setNotes([newNote, ...notes]);
    setEditMode(false);
  };

  const onDeleteNote = () => {
    if (
      activeNote &&
      !window.confirm("Are you sure you want to delete this note?")
    ) {
      return;
    }

    setNotes(notes.filter((note) => note.id !== activeNote));
    setActiveNote("");
    setEditMode(false);
  };

  const onEditMode = () => {
    activeNote && setEditMode(true);
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

  const onSearchText = (value) => {
    setSearchText(value);
    setActiveNote("");
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
        <SearchBox onSearchText={onSearchText} />
      </div>
      <div className="main">
        <Sidebar
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          setEditMode={setEditMode}
          searchText={searchText}
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
