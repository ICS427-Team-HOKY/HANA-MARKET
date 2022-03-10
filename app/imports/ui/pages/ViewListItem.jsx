import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Header, Loader } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Items } from '../../api/item/Item';
import { ListItem } from '../components/ListItem';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ViewListItems extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <div className="align-center-mode">
          <br />
          <Header as="h1" style={{ color: "rgb(44, 62, 80)" }} textAlign="center">List Item</Header>
          <br />
          <br />
          <Card.Group>
            {this.props.items.map((item) => <ListItem key={item._id} item={item} />)}
          </Card.Group>
          </div>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ViewListItems.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Items.allPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Stuff documents
  const items = Items.collection.find({}).fetch();
  return {
    items,
    ready,
  };
})(ViewListItems);
