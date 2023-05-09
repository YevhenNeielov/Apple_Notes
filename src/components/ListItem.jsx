const ListItem = ({ notes, activeNote, setActiveNote, setEditMode }) => {
  return (
    <>
      {notes.map((note) => (
        <li
          className={`listitem ${note.id === activeNote ? "active" : ""}`}
          onClick={() => {
            setActiveNote(note.id);
            setEditMode(false);
          }}
        >
          <p className="note-title">{note.title}</p>
          <p className="note-date">{note.date}</p>
          <p className="note-text">{note.text}</p>
        </li>
      ))}
    </>
  );
};

export default ListItem;
