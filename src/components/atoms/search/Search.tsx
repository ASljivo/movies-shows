import "./style.css";
import { FC, useCallback, useState } from "react";
import { debounce } from "lodash";
import { useGlobalContext } from "context/globalContext";
interface SearchTerms {
  value: string;
  setValue: Function;
  onSearch: Function;
}
const Search: FC<SearchTerms> = ({ value, setValue, onSearch }) => {
  //const [query, setQuery] = useState<string>("");
  const globalContext = useGlobalContext();

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, 1000),
    [onSearch]
  );

  const handleChange = (term: string) => {
    setValue(term);
    if (term.length > 2) {
      handleSearch(term);
    }
  };

  return (
    <>
      <section className="search-section">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </section>
    </>
  );
};

export default Search;
