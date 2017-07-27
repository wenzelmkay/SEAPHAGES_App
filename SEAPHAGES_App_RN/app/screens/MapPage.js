
//import different pages
import MapView, {Marker} from 'react-native-maps';
import React, { Component } from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import { Container, Content, Button, Icon, Header, Body, Title, Form, Item, Input, Label, Text } from 'native-base';
import Meteor, { createContainer } from 'react-native-meteor';
import styles from '../config/styles';


//const is like a variable but it can not be reassigned
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class MapPage extends React.Component {
    handleOpenModalPress = () => {
        this.props.navigation.navigate('modalCall');
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

        };

    }

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
        const { samples } = this.props;
        return (
            <View style ={styles.containerMap}>
                <MapView
                    //styles.map is very important! it lets the map display!
                    style = {styles.stylesMap}
                    ref = "map"
                    mapType = {"standard"}
                    region={this.state.currentRegion}
                    onRegionChange={this.onRegionChange}
                    //displays a dot at user's location
                    //showsUserLocation = {true}
                    showsCompass = {true}>

                    {samples.map((marker, i) => (
                        <MapView.Marker key={i}
                                        pinColor={"orange"}
                                        coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                                        title={marker.title}
                                        description={marker.description}>
                            <View style={styles.pin}>
                            </View>
                        </MapView.Marker>
                    ))}

                </MapView>
                <Button style={styles.buttonRound}
                    icon rounded
                     onPress = {() => {
                         this.handleOpenModalPress()
                     }}>
                    <Icon name='md-add' />
                </Button>
            </View>

        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
};

export default createContainer(() => {
    Meteor.subscribe('fakeSamples');

    return {
        samples: Meteor.collection('fakeSamples').find(),
    };
}, MapPage);
