import PropTypes from "prop-types";

const ListItem = ({ note, activeNote, setActiveNote, setEditMode }) => {
  let titleChecked =
    note.title.length > 35 ? note.title.slice(0, 35) + "..." : note.title;

  let textChecked =
    note.text.length > 55 ? note.text.slice(0, 55) + "..." : note.text;

  return (
    <li
      className={`listitem ${note.id === activeNote ? "active" : ""}`}
      onClick={() => {
        setActiveNote(note.id);
        setEditMode(false);
      }}
    >
      <p className="note-title">{titleChecked}</p>
      <p className="note-date">
        {new Date(note.date).toLocaleDateString("uk-Ua", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p className="note-text">{textChecked}</p>
    </li>
  );
};

ListItem.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  activeNote: PropTypes.string.isRequired,
};

export default ListItem;
