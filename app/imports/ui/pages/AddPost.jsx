import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import {
  AutoForm,
  ErrorsField, HiddenField,
  SubmitField,
  TextField,
} from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Communities } from '../../api/community/Community';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  title: String,
  postId: {
    type: String,
    optional: true,
  },
  description: String,
  createdAt: {
    type: String,
    optional: true,
  },
  owner: {
    type: String,
    optional: true,
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddPost extends React.Component {

  /** On submit, insert the data. */
  async submit(data, formRef) {
    const { title, postId, description, createdAt } = data;
    const owner = Meteor.user().username;

    Communities.collection.insert({ title, postId, description, createdAt, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Post added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
      <section className="add-event-page">
        <Grid container centered>
          <Grid.Column>
            <br />
            <Header as="h1" style={{ color: 'rgb(44, 62, 80)' }} textAlign="center">
                Add Post
            </Header>
            <br />
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name="title" label="Title" />
                <TextField name="description" label="Description"/>
                <HiddenField name='createdAt' value={new Date()}/>
                <SubmitField value="Submit" />
                <ErrorsField />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
      </section>
    );
  }
}

export default AddPost;
