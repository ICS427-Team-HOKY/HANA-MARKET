import React from 'react';
import { Button, Grid, Header, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class UserInfo extends React.Component {

  RowCell({ headerText, value }) {
    return value ? (
      <Table.Row>
        <Table.Cell width="eight">
          <Header as="h5">{headerText}</Header>
        </Table.Cell>
        <Table.Cell>{value}</Table.Cell>
      </Table.Row>
    ) : null;
  }

  render() {
    return (

      <Grid centered={true} className="users-container">
        <Grid.Column style={{ display: 'flex', flexDirection: 'column' }}>
          <Table>
            <Table.Header>
              <Table.Row textAlign="center">
                <Table.HeaderCell colSpan="2">{this.props.user.firstName} {this.props.user.lastName}</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <this.RowCell
                headerText="First Name"
                value={this.props.user.firstName}
              />
              <this.RowCell
                headerText="Last Name"
                value={this.props.user.lastName}
              />
              <this.RowCell headerText="Email" value={this.props.user.owner} />
              <this.RowCell
                headerText="Gender"
                value={this.props.user.gender}
              />
              <this.RowCell
                headerText="Date of Birth"
                value={String(this.props.user.birthDate.toDateString())}
              />
              <this.RowCell
                headerText="Address"
                value={this.props.user.address}
              />
              <this.RowCell
                headerText="Phone"
                value={this.props.user.phone}
              />
            </Table.Body>
          </Table>

          <Button
            as={NavLink}
            to={`/editUserProfile/${this.props.user._id}`}
            style={{ marginTop: '1rem' }}
          >
              Edit Profile
          </Button>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require a document to be passed to this component.
UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(UserInfo);
