import PropTypes from "prop-types";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Buttons = ({
  onAddNote,
  activeNote,
  onDeleteNote,
  onEditMode,
  editMode,
}) => {
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
      <div
        className={`button ${activeNote ? "button-active" : ""} ${
          editMode ? "button-colored" : ""
        }`}
        onClick={() => onEditMode()}
      >
        <FaEdit />
      </div>
    </div>
  );
};

Buttons.propTypes = {
  onAddNote: PropTypes.func.isRequired,
  activeNote: PropTypes.string.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onEditMode: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};

export default Buttons;
