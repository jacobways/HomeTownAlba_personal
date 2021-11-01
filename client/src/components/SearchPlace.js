// import React, { useState } from "react";
// import Map from "../pages/Map";

// const SearchPlaces = () => {
//   const [inputText, setInputText] = useState("");
//   const [place, setPlace] = useState("");

//   const onChange = e => {
//     setInputText(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     setPlace(inputText);
//     setInputText("");
//   };

//   return (
//     <>
//       <form className="inputForm" onSubmit={handleSubmit}>
//         <input
//           placeholder="검색어를 입력하세요"
//           onChange={onChange}
//           value={inputText}
//           style={{ width: "400px", height: "30px", textAlign: "center" }}
//         />
//         <button type="submit">검색</button>
//       </form>
//       <Map searchPlace={place} />
//     </>
//   );
// };

// export default SearchPlaces;
