import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import _ from "lodash";

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

    this.companySearch("80917");
  }

  companySearch(term) {
    axios.get("http://localhost:3000/companies").then(res => {
      this.setState({ companies: res.data, selectedCompany: res.data[0] });
    });
  }

  render() {
    const companySearch = _.debounce(term => { this.companySearch(term) }, 300);

    return (
      <div>
        <Header />
        <SearchBar onSearchTermChange={companySearch} />
        <Container>
          <Grid stackable>
            <Grid.Row>
              <CompanyDetail company={this.state.selectedCompany} />
              <CompanyList
                onCompanySelect={selectedCompany =>
                  this.setState({ selectedCompany })
                }
                companies={this.state.companies}
              />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
