import React, { Component } from "react";
import { Input, Button, Icon } from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <Input
          icon={<Icon name="search" color="orange" inverted circular link />}
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
