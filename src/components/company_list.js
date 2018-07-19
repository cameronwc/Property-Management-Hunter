import React from "react";
import CompanyListItem from './company_list_item';
import { Grid, List } from "semantic-ui-react";

const CompanyList = (props) => {
    const companyItems = props.companies.map((company) => {
        return <CompanyListItem onCompanySelect={props.onCompanySelect} key={company._id} company={company} />
    })

  return (
    <Grid.Column width={6}>
      <List>{companyItems}</List>
    </Grid.Column>
  );
};

export default CompanyList;
