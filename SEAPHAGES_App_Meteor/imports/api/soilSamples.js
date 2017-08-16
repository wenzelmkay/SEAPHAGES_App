/**
 * Created by wenzelmk on 5/30/17.
 */

import { Mongo } from 'meteor/mongo';

const FakeSamples = new Mongo.Collection('fakeSamples');

Meteor.methods({
    'FakeSamples.addOne': ( newSample ) => {
        return FakeSamples.insert( newSample );
    },
});

Meteor.publish('fakeSamples', () => {
    return FakeSamples.find();
});

export default ( FakeSamples );

