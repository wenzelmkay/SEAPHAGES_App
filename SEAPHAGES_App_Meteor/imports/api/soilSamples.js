/**
 * Created by wenzelmk on 5/30/17.
 */

import { Mongo } from 'meteor/mongo';

const Samples = new Mongo.Collection('samples');

Meteor.methods({
    'Samples.addOne': ( newSample ) => {
        return Samples.insert( newSample );
    },
    'Samples.updateOne': ( updatedSample ) => {
        console.log(updatedSample)
        return Samples.update( {"_id": updatedSample._id}, {
            $set: {
                "title": updatedSample.title,
                "lat": updatedSample.lat,
                "lng": updatedSample.lng,
                "date": updatedSample.date,
                "description": updatedSample.description
            }
        });
    },
    'Samples.removeOne': ( remove_id ) => {
        return Samples.remove( {"_id": remove_id._id} );
    },
    },
);

Meteor.publish('samples', () => {
    return Samples.find();
});

export default ( Samples );
