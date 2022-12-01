import React, { useState } from "react";
import Search from "../component/Search";
import Options from "../component/Options";

const HomePage = () => {
  const [input, setInput] = useState("");
  const searchlURL = `https://api.pexels.com/v1/search?query=${input}&per_page=1`;
  return (
    <div>
      <Search />
      <Options />
    </div>
  );
};

export default HomePage;
