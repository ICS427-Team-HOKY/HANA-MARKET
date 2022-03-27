import React from 'react';
import { Image, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class ListItem extends React.Component {
  render() {
    return (
      <Card className="listItem">
        <a href="#">
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
          </Card.Content>
        </a>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ListItem);
