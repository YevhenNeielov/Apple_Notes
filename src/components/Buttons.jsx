import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Buttons = ({ onAddNote, activeNote, onDeleteNote }) => {
  return (
    <div className="buttons">
      <div className="button button_always-active" onClick={onAddNote}>
        <FaPlus />
      </div>
      <div
        className={`button ${activeNote ? "button-active" : ""}`}
        onClick={() => onDeleteNote()}
      >
        <FaTrash />
      </div>
      <div className={`button ${activeNote ? "button-active" : ""}`}>
        <FaEdit />
      </div>
    </div>
  );
};

export default Buttons;
