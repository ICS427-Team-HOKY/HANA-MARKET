import React from 'react';
import { Image, Card, Feed, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import swal from 'sweetalert';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class UserItem extends React.Component {
  removeItem(docID) {
    // eslint-disable-next-line no-console
    swal({
      title: 'Delete Item',
      text: 'Do you really want to delete this item?\n It will be deleted from My Item.',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.Items.collection.remove(docID);
          swal('Delete successful', {
            icon: 'success',
          });
        } else {
          swal('Delete cancelled');
        }
      });
  }

  render() {
    return (
      <Card className="listItem">
        <Image src={this.props.item.image}/>
        <Card.Content>
          <Card.Header>{this.props.item.title}</Card.Header>
          <Card.Meta> Location: {this.props.item.tradeAddress}</Card.Meta>
          <Card.Description>
            <strong>{this.props.item.category}</strong>
          </Card.Description>
          <Card.Description> Price: $ {this.props.item.price}</Card.Description>
          <Card.Description> Condition: {this.props.item.condition}</Card.Description>
          <Card.Description> Description: {this.props.item.description}</Card.Description>
          <Card.Description>
            <strong className="status"> Status: {this.props.item.status}</strong>
          </Card.Description>
          <Card.Content extra>
            <Card.Description> Owner: {this.props.item.owner}</Card.Description>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Link to={`/editItem/${this.props.item._id}`}>
                  Edit <Icon name="edit" />
              </Link>
              <Button
                floated="right"
                size="mini"
                icon
                onClick={() => this.removeItem(this.props.item._id)}
              >
                <Icon name="trash" />
              </Button>
            </Feed>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
UserItem.propTypes = {
  item: PropTypes.object.isRequired,
  Items: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UserItem);
