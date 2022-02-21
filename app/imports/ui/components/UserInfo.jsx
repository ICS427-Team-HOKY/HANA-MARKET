import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class UserInfo extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.user.firstName}</Table.Cell>
        <Table.Cell>{this.props.user.lastName}</Table.Cell>
        <Table.Cell>{this.props.user.gender}</Table.Cell>
        <Table.Cell>{this.props.user.birthDate.toDateString()}</Table.Cell>
        <Table.Cell>{this.props.user.address}</Table.Cell>
        <Table.Cell>{this.props.user.phone}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.user._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
UserInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    gender: PropTypes.string,
    birthDate: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.number,
    _id: PropTypes.string,
  }).isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(UserInfo);
