import React from "react";
import CompanyListItem from './company_list_item';
import { Grid, List } from "semantic-ui-react";

const CompanyList = (props) => {
    const companyItems = props.companies.map((company) => {
        return <CompanyListItem key={company._id} company={company} />
    })

  return (
    <Grid.Column>
      <List>{companyItems}</List>
    </Grid.Column>
  );
};

export default CompanyList;
