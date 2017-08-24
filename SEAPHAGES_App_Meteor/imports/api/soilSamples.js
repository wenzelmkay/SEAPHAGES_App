/**
 * Created by wenzelmk on 5/30/17.
 */

import { Mongo } from 'meteor/mongo';

const Samples = new Mongo.Collection('samples');

Meteor.methods({
    'Samples.addOne': ( newSample ) => {
        return Samples.insert( newSample );
    },
});

Meteor.publish('samples', () => {
    return Samples.find();
});

export default ( Samples );
