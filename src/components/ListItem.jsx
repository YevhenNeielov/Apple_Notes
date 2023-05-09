const ListItem = ({ notes, activeNote, setActiveNote, setEditMode }) => {
  const sortedNotes = notes.sort((a, b) => b.date - a.date);

  return (
    <>
      {sortedNotes.map((note) => (
        <li
          className={`listitem ${note.id === activeNote ? "active" : ""}`}
          onClick={() => {
            setActiveNote(note.id);
            setEditMode(false);
          }}
        >
          <p className="note-title">{note.title}</p>
          <p className="note-date">
            {new Date(note.date).toLocaleDateString("uk-Ua", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="note-text">{note.text}</p>
        </li>
      ))}
    </>
  );
};

export default ListItem;
