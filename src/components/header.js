import React, { Component } from "react";
import { Image, Menu, Divider } from "semantic-ui-react";
import { withRouter } from 'react-router-dom';

class Header extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  // handleItemClick(e, {name}) {
  //   this.setState({activeItem: name});
  // }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navMenu">
        <Menu secondary>
          <a href='https://propertymanagementhunter.com'><Image src="https://propertymanagementhunter.com/company-img/logo.png" /></a>
          <Menu.Menu position="right">
              <Menu.Item
                name="Home"
                color='orange'
                active={activeItem === "Home"}
                onClick={this.handleItemClick}
              />
            <Menu.Item
              name="Login"
              color='orange'
              active={activeItem === "Login"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Register"
              color='orange'
              active={activeItem === "Register"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        <Divider />
      </div>
    );
  }
}

export default Header;
