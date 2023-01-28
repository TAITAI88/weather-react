import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <div className="search_bar">
        <input
          onChange={inputHandler}
          type="text"
          placeholder="Input city name, Ex: Taipei、Tainan..."
        />
        <button onClick={search}>Submit</button>
      </div>
    </div>
  );
};

export default Search;
