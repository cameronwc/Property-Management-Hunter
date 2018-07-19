import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

// Components
import Header from "./components/header";
import SearchBar from "./components/search_bar";
import CompanyList from "./components/company_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { companies: [] };

    axios.get("http://localhost:3000/companies").then(res => {
      this.setState({ companies: res.data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <CompanyList companies={this.state.companies} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
