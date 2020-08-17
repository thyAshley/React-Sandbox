import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
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
      </div>
    );
  }
}

export default Search;
