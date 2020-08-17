import React, { Component, FormEvent } from "react";

interface IProps {
  searchUsers: Function;
  clearUsers: React.MouseEventHandler;
  showClear: boolean;
  setAlert: Function;
}

export class Search extends Component<IProps> {
  state = {
    text: "",
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChangeHandler}
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
  }
}

export default Search;
