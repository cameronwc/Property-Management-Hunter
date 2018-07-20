import React, { Component } from "react";
import {
  Input,
  Button,
  Icon,
  Segment,
  Container,
  Grid
} from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className='searchBar'>
        <Container>
          <Segment>
            <h1>Find a Property Management company for your Home</h1>
            <Grid columns={2} stackable>
              <Grid.Column>
                <Input
                  placeholder='Select Your Property Type'
                  fluid
                  onChange={event =>
                    this.setState({ term: event.target.value })
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  placeholder='Enter your Zip Code'
                  fluid
                  action={{ content: 'Search', icon: 'search', labelPosition: 'right', color: 'orange' }}
                  value={this.state.term}
                  onChange={event => this.onInputChange(event.target.value)}
                />
              </Grid.Column>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
