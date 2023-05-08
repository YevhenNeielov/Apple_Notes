import ListItem from "./ListItem";

const Sidebar = ({ notes, activeNote, setActiveNote }) => {
  return (
    <ul className="sidebar">
      <ListItem
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
    </ul>
  );
};

export default Sidebar;
