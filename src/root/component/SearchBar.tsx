
import { FiSearch } from "react-icons/fi";

// Import the SCSS file for styling
import '../../styles/sarchbar.scss';

const Searchbar = () => {
  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        placeholder="Search for anything..."
        className="searchbar-input"
      />
      <div className="searchbar-icon-container">
      <FiSearch className="searchbar-icon" />
      </div>
    </div>
  );
}

export default Searchbar;
