import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Buttons = () => {
  return (
    <div className="buttons">
      <div className="button button_always-active">
        <FaPlus />
      </div>
      <div className="button button_switch">
        <FaTrash />
      </div>
      <div className="button button_switch">
        <FaEdit />
      </div>
    </div>
  );
};

export default Buttons;
