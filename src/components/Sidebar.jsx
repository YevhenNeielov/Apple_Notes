import { useMemo } from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const Sidebar = ({
  notes,
  activeNote,
  setActiveNote,
  setEditMode,
  searchText,
}) => {
  const sortedNotes = notes.sort((a, b) => b.date - a.date);

  function searchNotes(sortedNotes, searchText) {
    searchText &&
      (sortedNotes = sortedNotes.filter(
        (t) =>
          t.title.toLowerCase().includes(searchText.toLowerCase()) +
          t.text.toLowerCase().includes(searchText.toLowerCase())
      ));
    return sortedNotes;
  }

  const filteredNotes = useMemo(
    () => searchNotes(sortedNotes, searchText),
    [sortedNotes, searchText]
  );

  return (
    <ul className="sidebar">
      {filteredNotes.map((note) => (
        <ListItem
          key={note.id}
          note={note}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          setEditMode={setEditMode}
        />
      ))}
    </ul>
  );
};

Sidebar.propTypes = {
  notes: PropTypes.array.isRequired,
  activeNote: PropTypes.string.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default Sidebar;
