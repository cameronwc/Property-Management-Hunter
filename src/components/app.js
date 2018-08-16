import React from "react";
import { Component } from "react";

import Header from "./header";
import CompanyList from "../containers/company_list";
import CompanyDetail from "../containers/company_detail";
import HomepageInfo from "./homepage_info";
import SearchBar from "./search_bar";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <HomepageInfo />
        <Footer />
      </div>
    );
  }
}
