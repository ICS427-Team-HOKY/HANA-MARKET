import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, DateField, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Users } from '../../api/user/User';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  gender: {
    type: String,
    optional: true,
    allowedValues: ['Male', 'Female', 'Other'],
  },
  birthDate: {
    type: Date,
    optional: true,
  },
  address: String,
  phone: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class CreateUserProfile extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { firstName, lastName, gender, birthDate, address, phone } = data;
    const owner = Meteor.user().username;
    Users.collection.insert({ firstName, lastName, gender, birthDate, address, phone, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Profile created successfully', 'success');
          formRef.reset();
        }
      });
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">Create Profile</Header>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
            <Segment>
              <TextField name='firstName' label='First Name'/>
              <TextField name='lastName' label='Last Name'/>
              <SelectField name='gender' label='Gender'/>
              <DateField name='birthDate' label='Date of Birth' />
              <TextField name='address' label='Address'/>
              <NumField name='phone' decimal={false}/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CreateUserProfile;
