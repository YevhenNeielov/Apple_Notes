import { FaPlus, FaTrash, FaEdit, FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="header">
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
        <div className="searchbox">
          <input type="text" className="search" />
          <FaSearch className="search-hide search-hide_left" />
          <span className="search-hide search-hide_right">Search</span>
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          <div className="listitem">
            <p className="note-title">Wow, first note</p>
            <p className="note-date">12:17</p>
            <p className="note-text">first text</p>
          </div>
          <div className="listitem">
            <p className="note-title">Wow, first note</p>
            <p className="note-date">12:17</p>
            <p className="note-text">first text</p>
          </div>
          <div className="listitem">
            <p className="note-title">Wow, first note</p>
            <p className="note-date">12:17</p>
            <p className="note-text">first text</p>
          </div>
        </div>
        <div className="workspace">
          <input type="text" />
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
