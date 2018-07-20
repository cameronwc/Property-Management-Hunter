import React, { Component } from "react";
import { connect } from "react-redux";

class CompanyDetail extends Component {
  render() {
    if (!this.props.company) {
      return <div>Click a company</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.company.companyName}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    company: state.activeCompany
  };
}

export default connect(mapStateToProps)(CompanyDetail);
