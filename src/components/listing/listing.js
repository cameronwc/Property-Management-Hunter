import React from "react";
import { Component } from "react";

import Header from "../header";
import CompanyList from "../../containers/company_list";
import CompanyDetail from "../../containers/company_detail";
import Footer from "../footer";

export default class Listing extends Component {
  render() {
    return (
      <div>
        <Header />
        <CompanyList />
        <CompanyDetail />
        <Footer />
      </div>
    );
  }
}
