import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Comments } from '/imports/api/comment/Comment';
import { Segment } from 'semantic-ui-react';
import { AutoForm, TextField, SubmitField, HiddenField, ErrorsField } from 'uniforms-semantic';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import swal from 'sweetalert';

const formSchema = new SimpleSchema({
  comment: String,
  itemId: String,
  createdAt: Date,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddComment extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  submit(data, formRef) {
    const { comment, itemId, createdAt } = data;
    const owner = Meteor.user().username;
    Comments.collection.insert({ comment, itemId, createdAt, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
      <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
        <Segment>
          <TextField label="Add a comment..." name='comment'/>
          <SubmitField value='Submit'/>
          <ErrorsField/>
          <HiddenField name='itemId' value={this.props.itemId}/>
          <HiddenField name='createdAt' value={new Date()}/>
        </Segment>
      </AutoForm>

    );
  }
}

AddComment.propTypes = {
  owner: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default AddComment;
