import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Table, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Items } from '../../api/item/Item';
import { Comments } from '/imports/api/comment/Comment';
import ListItemAdmin from '../components/ListItemAdmin';
import { UserList } from '../../api/userList/UserList';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ViewAdmin extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Container>
        <Header as="h2" textAlign="center" style={{ fontSize: '28px', margin: '40px auto' }}>List Items (Admin)</Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Image</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Category</Table.HeaderCell>
              <Table.HeaderCell>Trade Location</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Condition</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
              <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.items.map((item) => <ListItemAdmin key={item._id} item={item} comments={this.props.comments.filter(comment => (comment.itemId === item._id))}/>)}
          </Table.Body>
        </Table>
        <Header as="h2" textAlign="center" style={{ fontSize: '28px', margin: '40px auto' }}>List Users</Header>
        <Table>
          <Table.Header><Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.userList.map((listUser) => <Table.Row key={listUser._id}>
              <Table.Cell>{listUser.user}</Table.Cell>
            </Table.Row>) }
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ViewAdmin.propTypes = {
  userList: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Items.adminPublicationName);
  const subscription2 = Meteor.subscribe(Comments.adminPublicationName);
  const subscription3 = Meteor.subscribe('UserList');
  return {
    userList: UserList.find({}).fetch(),
    items: Items.collection.find({}).fetch(),
    comments: Comments.collection.find({}).fetch(),
    ready: (subscription.ready() && subscription2.ready() && subscription3.ready()),
  };
})(ViewAdmin);
