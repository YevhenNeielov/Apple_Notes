import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="searchbox">
      <input type="text" className="search" />
      <FaSearch className="search-hide search-hide_left" />
      <span className="search-hide search-hide_right">Search</span>
    </div>
  );
};

export default SearchBox;
