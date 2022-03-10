import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/User';
import { Items } from '../../api/item/Item';

/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Users.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Users.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

// Initialize the database with a default data document.
function addItem(data) {
  console.log(`  Adding: ${data.title} (${data.owner})`);
  Items.collection.insert(data);
}

// Initialize the StuffsCollection if empty.
if (Items.collection.find().count() === 0) {
  if (Meteor.settings.defaultItem) {
    console.log('Creating default item.');
    Meteor.settings.defaultItem.map(data => addItem(data));
  }
}