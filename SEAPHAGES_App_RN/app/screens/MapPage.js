
//import different pages
import MapView, {Marker} from 'react-native-maps';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Dimensions,
    Navigator,
    TouchableHighlight,
    Text,
    Alert,
    TouchableOpacity,
    Modal,
    TextInput,
} from 'react-native';
import { Container, Content, Button, Icon,} from 'native-base';
import Meteor, { createContainer } from 'react-native-meteor';


//const is like a variable but it can not be reassigned
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.03;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


class MapPage extends React.Component {
    handleAddSamplePress = () => {
        this.props.navigation.navigate('Settings');
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
            //make an empty array called markers; to later be populated with data from the database
            markers: [],

        };
        //this.onRegionChange = this.onRegionChange.bind(this);
    }

    //To fetch sample data from the database, and store it in the empty markers array (line 69)
    listenForItems(itemsRef) {
        itemsRef.on('value', (snap) => {
            // get children from database and push as into items array
            const items = [];
            snap.forEach((child) => {
                items.push({
                    sampleName: child.val().sampleName,
                    latitude: child.val().latitude,
                    longitude: child.val().longitude,
                    details: child.val().details,
                    _key: child.key
                });
            });
            //confirms that items has been populated with data
            console.log(items);
            //push items data into markers array
            this.setState({
                markers: items,
            });
            //confirms markers has been populated with data
            console.log(this.state.markers);

        });
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
                this.setState(
                    {
                        myLat: position.coords.latitude,
                        myLon: position.coords.longitude,
                    },
                );
            },
 (error) => console.log(new Date(), error),
                    {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000}
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
            <View style ={styles.container}>
                <MapView
                    //styles.map is very important! it lets the map display!
                    style = {styles.map}
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
                                        title={marker.sampleName}
                                        description={marker.details}>
                            <View style={styles.pin}>
                            </View>
                        </MapView.Marker>
                    ))}

                </MapView>

                <Container>
                  <Content>
                    <Button rounded
                      onPress = {() => {
                        this.handleAddSamplePress()
                      }}>
                      <Icon name='arrow-back' />
                        <Text>Add Sample</Text>
                    </Button>
                  </Content>
                </Container>
            </View>

        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }
};

//const is like a variable but it can not be reassigned; Routes assigns a title and index number to each scene in app.
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    buttonContainer:{
        position: 'absolute',
        bottom:0,
        left:0,
    },
    headerText : {
        fontSize: 30,
        color: '#515356',
        fontWeight: 'bold',
    },
    fieldNameText: {
        fontSize: 20,
        color: '#515356',
        paddingTop: 20,
    },
    inputText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#a7abb2',

    },
});

export default createContainer(() => {
    Meteor.subscribe('fakeSamples');

    return {
        samples: Meteor.collection('fakeSamples').find(),
    };
}, MapPage);
