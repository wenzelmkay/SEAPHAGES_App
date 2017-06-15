/**
 * Created by wenzelmk on 5/30/17.
 */

import { Mongo } from 'meteor/mongo';

const FakeSamples = new Mongo.Collection('fakeSamples');

/*Meteor.methods({
    'Items.addOne': ({ name }) => {
        return Items.insert({ name });
    },
});*/

Meteor.publish('fakeSamples', () => {
    return FakeSamples.find();
});

export default ( FakeSamples );