import React from 'react';
import { Card, CardDescription } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AddComment from '/imports/ui/components/AddComment';
import Comment from '/imports/ui/components/Comment';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class Community extends React.Component {
  render() {
    return (
      <Card className="listItem" style={{ margin: '30px' }}>
        <Card.Content>
          <Card.Header>{this.props.post.title}</Card.Header>
          <Card.Description> Description: <br /><strong style={{ fontSize: '15px' }}>{this.props.post.description}</strong></Card.Description>
          <Card.Content extra className="comment-feed-listitem">
            <CardDescription style={{ textAlign: 'center', fontSize: '17px', marginTop: '10px' }}><strong>Comments</strong></CardDescription>
            {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
          </Card.Content>
          <Card.Content extra>
            <AddComment owner={this.props.post.owner} itemId={this.props.post._id}/>
          </Card.Content>
          <Card.Content extra>
            <Card.Description> Owner: {this.props.post.owner}</Card.Description>
          </Card.Content>
        </Card.Content>
      </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Community.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Community);
