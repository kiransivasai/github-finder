import React, { useState } from "react";

function Search({ searchUsers, clearUsers, showClear }) {
  const [text, setText] = useState("");
  const checkUser = (e) => {
    e.preventDefault();
    searchUsers(text);
    setText("");
  };
  return (
    <div>
      <form className="form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          onClick={checkUser}
          disabled={!text}
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
