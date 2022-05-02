import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { verticalAlign: 'middle', height: '72px', background: 'rgba(255,255,255, 1)', boxShadow: '0 2px 5px rgba(0,0,0, .15)' };
    const subMenu = { fontSize: '20px', color: 'rgba(0,0,0, .6)', fontFamily: 'Montserrat', fontWeight: '500' };
    return (
      <Menu style={menuStyle} attached="top" borderless>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header as='h1'><span className="logo">HANA<span className="logo-2">*</span></span></Header>
        </Menu.Item>
        {this.props.currentUser ? (
          [<Menu.Item style={subMenu} as={NavLink} activeClassName="active" exact to="/list" key='list'>List Item</Menu.Item>,
            <Menu.Item style={subMenu} as={NavLink} activeClassName="active" exact to="/addItem" key='add'>Add Item</Menu.Item>,
            <Menu.Item style={subMenu} as={NavLink} activeClassName="active" exact to="/viewPost" key='post'>Community</Menu.Item>,
            <Menu.Item style={subMenu} as={NavLink} activeClassName="active" exact to="/myItem" key='myItem'>My Item</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item style={subMenu} as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}
        <Menu.Item position="right" style={{ fontSize: '20px', color: '#232323' }}>
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-my-profile" icon="user" text="My Profile" as={NavLink} exact to="/view"/>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
