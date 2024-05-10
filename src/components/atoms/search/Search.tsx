import "./style.css";
import { FC } from "react";
import { SearchTerms } from "models/SearchTerms";

const Search: FC<SearchTerms> = ({ value, setValue, onSearch }) => {
  const handleChange = (term: string) => {
    setValue(term);
    onSearch(term);
  };

  return (
    <section className="search-section">
      <div>
        <input
          autoFocus
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Search;
