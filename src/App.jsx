import { useState } from "react";
import { generate as id } from "shortid";

import Buttons from "./components/Buttons";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: id(),
      title: "Note title",
      text: "Note text",
      date: new Date(Date.now()).toLocaleDateString("uk-Ua", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = () => {
    setNotes(notes.filter((note) => note.id !== activeNote));
    setActiveNote(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Buttons
          onAddNote={onAddNote}
          activeNote={activeNote}
          onDeleteNote={onDeleteNote}
        />
        <SearchBox />
      </div>
      <div className="main">
        <Sidebar
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
