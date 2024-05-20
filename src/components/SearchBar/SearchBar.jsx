import { BsSearch } from "react-icons/bs";
import './SearchBar.css'
import { useState } from "react";
import fetchProducts from "../../api/fetchProducts";

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) =>{
    setSearchValue(event.target.value);
  }
  
  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    console.log(products);
    searchValue('')
    
  }

  
  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
