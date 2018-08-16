import React, { Component } from "react";
import {
  Input,
  Button,
  Icon,
  Segment,
  Container,
  Grid,
  Header
} from "semantic-ui-react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { propType: "", zip: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.zip);
  }

  render() {
    return (
      <div className='searchBar'>
        <Container>
          <Segment>
            <Header as='h1' className='blue-custom'>Find a Property Management company for your <span className='orange'>Home</span></Header>
            <form onSubmit={this.handleSubmit}>
            <Grid columns={2} stackable>
              <Grid.Column>
                <Input
                  placeholder='Select Your Property Type'
                  fluid
                  value={this.state.propType}
                  onChange={event =>
                    this.setState({ propType: event.target.value })
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  placeholder='Enter your Zip Code'
                  fluid
                  action={{ content: 'Search', icon: 'search', labelPosition: 'right', color: 'orange' }}
                  value={this.state.zip}
                  onChange={event => 
                    this.setState({zip: event.target.value})}
                />
              </Grid.Column>
            </Grid>
            </form>
          </Segment>
        </Container>
      </div>
    );
  }
}

export default SearchBar;
