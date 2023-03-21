import React from "react";
import { useState } from "react";
import { availableLocations } from "../location_list";

const locations = availableLocations.map((location) => location.cityName);

const Search = ({ cityName, setCurrentCity }) => {
  const [location, setLocation] = useState(cityName);

  const handleChange = (e) => {
    console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleSave = () => {
    if (locations.includes(location)) {
      console.log(`儲存的地區資訊為：${location}`);
      setCurrentCity(location);
      return;
    }
  };
  // const inputHandler = (e) => {
  //   setInput(e.target.value);
  // };
  return (
    <div className="search">
      <div className="search_bar">
        <label htmlFor="location">選擇地區:</label>
        <input
          list="location-list"
          id="location"
          name="location"
          onChange={handleChange}
          value={location}
        />
        <datalist id="location-list">
          {locations.map((location) => (
            <option value={location} key={location} />
          ))}
        </datalist>
        <button onClick={handleSave}>Submit</button>
      </div>
    </div>
  );
};

{
  /* <div className="search">
      <div className="search_bar">
        <input
           onChange={inputHandler}
           type="text"
         placeholder="Input city name, Ex: Taipei、Tainan..."
        />
         <button onClick={search}>Submit</button>
       </div>
     </div>  */
}

export default Search;
