import React from "react";
export default class SearchBar extends React.Component {
  state = { term: "" };
  render() {
    return (
      <div className="serach-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}
