import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";

function Search() {
  const githubContext = useContext(GithubContext);
  const showClear = githubContext.users.length > 0 ? true : false;

  const [text, setText] = useState("");
  const checkUser = (e) => {
    e.preventDefault();
    githubContext.searchUsers(text);
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
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
