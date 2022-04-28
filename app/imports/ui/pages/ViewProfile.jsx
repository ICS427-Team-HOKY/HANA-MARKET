import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Users } from '../../api/user/User';
import { UserInfo } from '../components/UserInfo';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ViewProfile extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    if (this.props.ready && this.props.users?.length === 0) {
      return <Redirect to={{ pathname: '/editUserProfile/new' }}/>;
    }
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <Container>
        <Header as="h1" style={{ color: 'rgb(44, 62, 80)', margin: '20px auto' }} textAlign="center">My Profile</Header>
        {this.props.users.map((user, index) => (
          <UserInfo key={index} user={user} />
        ))}
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
ViewProfile.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Users.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const users = Users.collection.find({}).fetch();
  return {
    users,
    ready,
  };
})(ViewProfile);
