import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// Components
import Header from "./components/header";
import SearchBar from "./components/search_bar";
import CompanyList from "./components/company_list";
import CompanyDetail from "./components/company_detail";

import { Grid, Container } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { companies: [], selectedCompany: null };

    axios.get("http://localhost:3000/companies").then(res => {
      this.setState({ companies: res.data, selectedCompany: res.data[0] });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Container>
          <Grid stackable>
            <Grid.Row>
              <CompanyDetail company={this.state.selectedCompany} />
              <CompanyList onCompanySelect={selectedCompany => this.setState({selectedCompany}) } companies={this.state.companies} />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
