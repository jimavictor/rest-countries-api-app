import Card from "./Card";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import React from "react";

function Body({ input, dark, option, setInputValue, setOptionValue }) {
  return (
    <div>
      <div className="search_filter">
        <SearchBox input={input} onInput={setInputValue} dark={dark} />
        <Filter value={option} onChange={setOptionValue} dark={dark} />
      </div>
      <Card value={option} input={input} dark={dark} />
    </div>
  );
}

export default Body;
