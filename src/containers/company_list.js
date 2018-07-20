import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectCompany } from '../actions/index';

class CompanyList extends Component {
  renderList() {
    return this.props.companies.map((company) => {
        return (
            <li onClick={() => this.props.selectCompany(company)} key={company.companyName}>{company.companyName}, {company.about}</li>
        )
    });
  }

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companies
  }
}

// Anything returned from this function will end up as props on this container
function mapDispatchToProps(dispatch) {
  // Whenever selectCompany is called result should be passed to all reducers
  return bindActionCreators({ selectCompany: selectCompany }, dispatch);
}

// Promote CompanyList from component to a container
// It needs to know about new dispatch method, selectCompany. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);