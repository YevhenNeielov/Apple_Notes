import ListItem from "./ListItem";

const Sidebar = ({ notes, activeNote, setActiveNote, setEditMode }) => {
  return (
    <ul className="sidebar">
      <ListItem
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        setEditMode={setEditMode}
      />
    </ul>
  );
};

export default Sidebar;
