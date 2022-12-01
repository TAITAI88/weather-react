import React, { useState } from "react";

const Search = () => {
  let [data, setData] = useState(null);
  const auth = "563492ad6f917000010000014f56f993b2254f0dbddc7aaf09c5ce9c";
  const intialURL = "https://www.travel.taipei/open-api/zh-tw/Attractions/All";
  const search = async () => {
    const dataFetch = await fetch(intialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData);
    console.log(parsedData);
  };

  return (
    <div className="search">
      <div className="search_bar">
        <input type="text" placeholder="搜尋..." />
        <button onClick={search}>Submit</button>
      </div>
    </div>
  );
};

export default Search;
