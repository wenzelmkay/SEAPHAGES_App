import { Mongo } from 'meteor/mongo';

const Items = new Mongo.Collection('items');
const Testdb = new Mongo.Collection('testdb');

Meteor.methods({
    'Items.addOne': ({ name }) => {
        return Items.insert({ name });
    },
});

Meteor.publish('items', () => {
    return Items.find();
});

Meteor.publish('testdb', () => {
    return Testdb.find();
});


export default (Items, Testdb);