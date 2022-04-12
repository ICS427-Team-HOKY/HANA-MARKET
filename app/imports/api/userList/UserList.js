import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Encapsulates state and variable values for this collection. */

/** Defines the mongo collection to hold the data */
const UserList = new Mongo.Collection('UserList');

/** Defines the signup schema */
const UserListSchema = new SimpleSchema({
  user: String,
}, { tracker: Tracker });

/** attaching the schema to the collection */
UserList.attachSchema(UserListSchema);

/** Making the collection and schema available for use in other files. */
export { UserList, UserListSchema };
