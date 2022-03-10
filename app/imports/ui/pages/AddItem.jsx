import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import {
  AutoForm,
  ErrorsField,
  SelectField,
  SubmitField,
  TextField,
} from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Items } from '../../api/item/Item';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  title: String,
  image: String,
  category: {
    type: String,
    optional: true,
    allowedValues: [
      'Digital/Home Appliances',
      'Furniture/Interior',
      'Kids',
      'Living',
      'Women',
      'Men',
      'Accessories',
      'Beauty',
      'Shoes',
      'Sports/Leisure',
      'Games/Hobbies',
      'Books/Tickets/Records',
      'Pet Supplies',
      'Other',
      'Buy',
    ],
  },
  price: Number,
  condition: {
    type: String,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
  },
  description: String,
  status: {
    type: String,
    allowedValues: ['Sale', 'Sold Out'],
  },
  tradeAddress: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/** Renders the Page for adding a document. */
class AddItem extends React.Component {

  /** On submit, insert the data. */
  async submit(data, formRef) {
    const { title, image, category, price, condition, description, status, tradeAddress } = data;
    const owner = Meteor.user().username;

    Items.collection.insert({ title, image, category, price, condition, description, status, tradeAddress, owner },
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
      <section className="add-event-page">
        <Grid container centered>
          <Grid.Column>
            <br />
            <Header as="h1" style={{ color: 'rgb(44, 62, 80)' }} textAlign="center">
            Add Item
            </Header>
            <br />
            <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name="title" label="Title" />
                <TextField name="image" label="Image URL"/>
                <SelectField name="category" label="Category"/>
                <TextField name="price" label="Price"/>
                <SelectField name="condition" label="Condition"/>
                <SelectField name="status" label="Status"/>
                <TextField name="tradeAddress" label="Location"/>
                <TextField name="description" />
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

export default AddItem;
