import React from 'react';
import { Image, Card, CardDescription } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddComment from '/imports/ui/components/AddComment';
import Comment from '/imports/ui/components/Comment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class ListItem extends React.Component {
  render() {
    return (
      <Card className="listItem" style={{ margin: '30px' }}>
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
          <Card.Content extra className="comment-feed-listitem">
            <CardDescription style={{ textAlign: 'center', fontSize: '17px', marginTop: '10px' }}><strong>Comments</strong></CardDescription>
            {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
          </Card.Content>
          <Card.Content extra>
            <AddComment owner={this.props.item.owner} itemId={this.props.item._id}/>
          </Card.Content>
          <Card.Content extra>
            <Card.Description> Owner: {this.props.item.owner}</Card.Description>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ListItem);
