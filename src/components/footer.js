import React from "react";
import { Container, Grid, List, Divider, Header, Icon } from "semantic-ui-react";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Grid columns={4} stackable>
          <Grid.Column>
            <Header as="h3" content="Discover" />
            <List>
              <List.Item>Single Family</List.Item>
              <List.Item>Multi-Family</List.Item>
              <List.Item>HOA</List.Item>
              <List.Item>Commercial</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" content="Join" />
            <List>
              <List.Item>Join Our Network</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" content="About" />
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Contact Us</List.Item>
              <List.Item>Terms of Service</List.Item>
              <List.Item>Privacy Policy</List.Item>
              <List.Item>FAQ</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" content="Contact" />
            <List>
              <List.Item>Contact Us</List.Item>
            </List>
            <List horizontal>
                <List.Item>
                    <a href='https://github.com/cameronwc/Property-Management-Hunter'><Icon name='github'/></a>
                </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
