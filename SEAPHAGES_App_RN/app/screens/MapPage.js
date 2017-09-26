
//import different pages
import MapView, {Marker} from 'react-native-maps';

import React, { Component } from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import { Container, Content, Button, Fab, Icon, Header, Body, Title, Form, Item, Input, Label, Text } from 'native-base';
import Meteor, { createContainer } from 'react-native-meteor';
import styles from '../config/styles';

//const is like a variable but it can not be reassigned
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import moment from 'moment';

class Map extends Component {
    handleOpenModalPress = () => {
        this.props.navigation.navigate('SampleAdd');
    };

    //set initial properties & states for the whole app
    constructor(props) {
        super(props);
        //set the initial region data for the map
        this.state = {
            region: {
                latitude: null,
                longitude: null,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            },
            pinColor: null,

        };

    }

    renderMarkers = () => {
          const { samples } = this.props;
          const { user } = this.props;

        return this.props.samples.map((sample) => (
            <MapView.Marker key={sample._id}
                            pinColor={sample.owner === user._id ? "purple" : "yellow"}
                            coordinate={{latitude: sample.lat, longitude: sample.lng}}>
                <MapView.Callout>
                    <View style={styles.callout}>
                        <Text>{sample.title}</Text>
                        <Text>{moment(sample.date).format("MMM Do YYYY, h:mm a")}</Text>
                        <Text>{sample.description}</Text>
                    </View>
                </MapView.Callout>
            </MapView.Marker>
        ));
    };


    //callback whenever the location changes so that it automatically refreshes.
    //watchID: ?number = null;

    //stage in the React Component Lifecycle; called after render() method has been executed; allows for manipulation of the dom
    // lines 104-137: this is where we are extracting geolocation data from the phone

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    {currentRegion: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                        }
                    },
                );

            },
 (error) => console.log(new Date(), error),
//                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 3000}
        );

        this.watchID = navigator.geolocation.watchPosition((position) => {
            this.setState(
                {newRegion: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }});
        });
    }
// Render tells the app that something is about to be displayed; return says what that is.
    render() {
        return (
            <View style ={styles.containerMap}>
                <MapView
                    //styles.map is very important! it lets the map display!
                    style = {styles.stylesMap}
                    showsCompass = {true}
                    ref = "map"
                    mapType = {"standard"}
                    region={this.state.currentRegion}
                    onRegionChange={this.onRegionChange}
                    showsUserLocation = {true}
                    >
                    {this.renderMarkers()}
                </MapView>


                <Fab
                        active={this.state.active}
                        direction="right"
                        containerStyle={{ marginLeft: 10 }}
                        style={{ backgroundColor: '#009688' }}
                        position="bottomRight"
                        onPress = {() => {
                            this.handleOpenModalPress()
                        }}>
                        <Icon name="md-add" />
                    </Fab>
            </View>

        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
};

export default createContainer(params => {
    Meteor.subscribe('samples');

    return {
        user: Meteor.user(),
        samples: Meteor.collection('samples').find(),
    };
}, Map);
