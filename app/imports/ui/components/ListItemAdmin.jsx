import React from 'react';
import { Table, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Comment from '/imports/ui/components/Comment';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
export class ListItemAdmin extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell> <Image size='tiny' src={this.props.item.image}/> </Table.Cell>
        <Table.Cell>{this.props.item.title}</Table.Cell>
        <Table.Cell>{this.props.item.category}</Table.Cell>
        <Table.Cell>{this.props.item.tradeAddress}</Table.Cell>
        <Table.Cell>{this.props.item.price}</Table.Cell>
        <Table.Cell>{this.props.item.condition}</Table.Cell>
        <Table.Cell><strong style={{ color: 'red' }}>{this.props.item.status}</strong></Table.Cell>
        <Table.Cell>{this.props.item.owner}</Table.Cell>
        <Table.Cell>
          <Feed>
            {this.props.comments.map((comment, index) => <Comment key={index} comment={comment}/>)}
          </Feed>
        </Table.Cell>
      </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
ListItemAdmin.propTypes = {
  item: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

export default ListItemAdmin;
