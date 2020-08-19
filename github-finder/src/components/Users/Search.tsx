import React, { FormEvent, useState } from "react";

interface IProps {
  searchUsers: Function;
  clearUsers: React.MouseEventHandler;
  showClear: boolean;
  setAlert: Function;
}

const Search: React.FC<IProps> = ({
  showClear,
  clearUsers,
  setAlert,
  searchUsers,
}) => {
  const [text, setText] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="text"
          value={text}
          onChange={onChangeHandler}
          placeholder="Search Users"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
