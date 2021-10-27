import React, { useState } from "react";
import Map from "./Map";

const SearchPlaces = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = e => {
    setInputText(e.target.value);
  };

  const HandleSubmit = e => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <from calssName="inputForm" onSubmit={HandleSubmit}>
        <input
          placeholder="검색할 내용을 입력하세요"
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">Search</button>
      </from>
      <Map searchPlace={place} />
    </>
  );
};

export default SearchPlaces;