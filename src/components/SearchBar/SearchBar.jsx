import { BsSearch } from "react-icons/bs";
import './SearchBar.css'
import { useState } from "react";

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) =>{
    setSearchValue(event.target.value);
  }

  
  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange={handleInputChange}
        required
      />
      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
};

export default SearchBar;
