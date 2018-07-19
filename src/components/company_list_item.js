import React from "react";
import { Grid, List, Image, Button, Segment, Header } from "semantic-ui-react";

const CompanyListItem = ({ company, onCompanySelect }) => {
    const randomTime = 1000000000000 + Math.random() * (2000000000000 - 1000000000000);
    const url = `https://picsum.photos/300/200?random?time=${randomTime}`;
  return (
    <List.Item onClick={() => onCompanySelect(company)}>
      <Segment raised>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={url} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h3" color="orange" textAlign="center">
                {company.companyName}
              </Header>
              {company.about}
            </Grid.Column>
            <Grid.Column width={6}>
              <Button color="orange" content="View Company" size='small' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </List.Item>
  );
};

export default CompanyListItem;
