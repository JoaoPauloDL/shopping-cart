import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";
import { useState, useContext } from "react";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

const SearchBar = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true)
    const products = await fetchProducts(searchValue);
    setProducts(products)
    setLoading(false)
    searchValue("");
  };

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
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
