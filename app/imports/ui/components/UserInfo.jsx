import React from 'react';
import { Button, Grid, Header, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
export class UserInfo extends React.Component {

  RowCell({ headerText, value }) {
    return value ? (
      <Table.Row>
        </Table.Cell>
      </Table.Row>
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
