import PropTypes from "prop-types";

const SearchBox = ({ onSearchText }) => {
  return (
    <div className="searchbox">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => onSearchText(e.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  onSearchText: PropTypes.func.isRequired,
};

export default SearchBox;
