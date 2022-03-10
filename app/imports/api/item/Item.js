import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class ItemsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ItemsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
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
      owner: {
        type: String,
        optional: true,
      },
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.allPublicationName = `${this.name}.publication.all`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {ItemsCollection}
 */
export const Items = new ItemsCollection();
