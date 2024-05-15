import SearchBar from "../SearchBar/SearchBar";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <SearchBar  />
        <button>cart</button>
      </div>
    </header>
  );
};

export default Header;
 