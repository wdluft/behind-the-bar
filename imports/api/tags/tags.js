// eslint-disable-next-line import/no-unresolved
import { Mongo } from 'meteor/mongo';

const Tags = new Mongo.Collection('tags');

export default Tags;
