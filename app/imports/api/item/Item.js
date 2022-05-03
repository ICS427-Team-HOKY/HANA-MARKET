import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { CallPromiseMixin } from 'meteor/didericis:callpromise-mixin';


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

  define({ title, image, category, price, condition, description, status, tradeAddress, owner }) {
    const docID = this.collection.insert(
      { title, image, category, price, condition, description, status, tradeAddress, owner }
    );
    return docID;
  }

  removeIt(id) {
    this.collection.remove(id);
    return true;
  }

  update(docID, data) {
    this.collection.update(docID, { $set: data });
  }

}

/**
 * Meteor method used to define new instances of the given collection name.
 * @param collectionName the name of the collection.
 * @param definitionDate the object used in the collection.define method.
 * @memberOf api/base
 */
 export const itemsDefineMethod = new ValidatedMethod({
  name: 'ItemsCollection.define',
  mixins: [CallPromiseMixin],
  validate: null,
  run(definitionData) {
    if (Meteor.isServer) {
      const docID = Items.define(definitionData);
      return docID;
    }
    return '';
  },
});

export const itemsUpdateMethod = new ValidatedMethod({
  name: 'ItemsCollection.update',
  mixins: [CallPromiseMixin],
  validate: null,
  run(updateData) {
    let id = updateData._id;
    delete updateData._id;
    Items.update(id, updateData);
    return true;
  },
});

export const itemsRemoveItMethod = new ValidatedMethod({
  name: 'ItemsCollection.removeIt',
  mixins: [CallPromiseMixin],
  validate: null,
  run(id) {
    return Items.removeIt(id);
  },
});


/**
 * The singleton instance of the StuffsCollection.
 * @type {ItemsCollection}
 */
export const Items = new ItemsCollection();
