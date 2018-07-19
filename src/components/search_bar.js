import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div>
            <input 
            value={this.state.term}
            onChange={ event => this.setState({ term: event.target.value })}/>
            <Button color='orange'>Submit</Button>
            </div>
        );
    } 
}

export default SearchBar;
