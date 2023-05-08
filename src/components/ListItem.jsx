const ListItem = ({ notes, activeNote, setActiveNote }) => {
  return (
    <>
      {notes.map((note) => (
        <li
          className={`listitem ${note.id === activeNote ? "active" : ""}`}
          onClick={() => setActiveNote(note.id)}
        >
          <p className="note-title">
            {note.title.length > 40
              ? note.title.slice(0, 40) + `...`
              : note.title}
          </p>
          <p className="note-date">{note.date}</p>
          <p className="note-text">{note.text}</p>
        </li>
      ))}
    </>
  );
};

export default ListItem;
