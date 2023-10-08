import React from "react";

function SearchBar({ searchChange }) {
  return (
    <>
      <input
        style={styles.input}
        className="mb-3"
        placeholder="search name"
        onChange={searchChange}
      ></input>
    </>
  );
}
const styles = {
  input: {
    borderRadius: "18px",
    width: "94%",
    backgroundColor: "#fff",
    outline:"none",
    margin: "5px 10px",
    padding: "10px",
    border: "1px solid green",
  },
};
export default SearchBar;