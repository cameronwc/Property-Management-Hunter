import React from "react";
import {
  Grid,
  Segment,
  List,
  Header,
  Container,
  Button,
  Divider
} from "semantic-ui-react";

const HomepageInfo = props => {
  return (
    <div>
      <Container>
        <Header
          as="h1"
          content="Find the Perfect Property Manager for Free!"
          className="blue-custom"
          textAlign="center"
        />
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Segment raised>
                <Header
                  as="h3"
                  content="Popular Cities"
                  color="orange"
                  textAlign="center"
                />
                <List>
                  <List.Item>
                    <a href="test">Jacksonville, FL</a>
                  </List.Item>
                  <List.Item>
                    <a href="test">Colorado Springs, Co</a>
                  </List.Item>
                  <List.Item>
                    <a href="test">Neptune Beach, FL</a>
                  </List.Item>
                </List>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment raised>
                <Header
                  as="h3"
                  content="Why use Property Management Hunter?"
                  color="orange"
                />
                <p>
                  When looking for a property management company, it's hard to
                  find information regarding a company. Our directory can help!
                  Use our comprehensive database to find and compare FREE quotes
                  from companies in your area.
                </p>
                <p>
                  Whether you need help with renting your home, condominium, or
                  commercial office property, we have quality management
                  companies that can help. Our property management search can
                  help you locate a professional property management firm that
                  will oversee the care of your real estate property.
                </p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Grid columns={2} stackable className="advertisements">
          <Grid.Column>
            <div className="userAd">
              <Header
                as="h2"
                content="Looking for a Property Management Company?"
                textAlign="center"
              />
              <div className="center-button-wrapper">
                <Button
                  color="orange"
                  size="medium"
                  content="Get FREE quotes today!"
                />
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="companyAd">
              <Header
                as="h2"
                content="Looking for Home Owners to discover your company?"
                textAlign="center"
              />
              <div className="center-button-wrapper">
                <Button
                  color="blue"
                  size="medium"
                  content="Get FREE quotes today!"
                />
              </div>
            </div>
          </Grid.Column>
      </Grid>
    </div>
  );
};

export default HomepageInfo;
