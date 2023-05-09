import grumpy from "../i/Grumpy_cat.jpg";

const Workspace = ({ getActiveNote, onUpdateNote, editMode }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...getActiveNote,
      [key]: value,
      date: Date.now(),
    });
  };

  if (!getActiveNote) {
    return (
      <div className="empty-workspace">
        <p className="empty-text">Empty</p>
        <div>
          <img src={grumpy} alt="Grumpy cat" className="empty-img" />
        </div>
      </div>
    );
  }

  return (
    <div className="workspace">
      <input
        type="text"
        id="title"
        placeholder="Write title for your note"
        value={getActiveNote.title}
        readOnly={!editMode}
        onChange={(e) => onEditNote("title", e.target.value)}
      />
      <textarea
        id="text"
        placeholder="Write your note"
        value={getActiveNote.text}
        readOnly={!editMode}
        onChange={(e) => onEditNote("text", e.target.value)}
      ></textarea>
    </div>
  );
};

export default Workspace;
