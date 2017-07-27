/**
 * Created by wenzelmk on 5/16/17.
 */

import React, { Component } from 'react';
import { View, TouchableHighlight, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { goBack, NavigationOptions } from 'react-navigation';


class SampleAddPage extends Component {
    //lines establish whether or not the modal window is visible, and write a function to make the modal visible (this is called later on lines 172 & 205
    constructor(props) {
        super(props);
        //set the initial region data for the map
        this.state = {
            region: {
                latitude: null,
                longitude: null,
            },

        };

    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                );

            },

        );
    }


    render() {
        /*let myLat = value.toString(this.state.latitude);
        console.log(myLat)*/


        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Sample Name</Label>
                            <Input />
                        </Item>
                        <Item disabled>
                            <Label>Latitude</Label>
                            <Input disabled placeholder={String(this.state.latitude)}/>
                        </Item>
                        <Item disabled>
                            <Label>Longitude</Label>
                            <Input disabled placeholder={String(this.state.longitude)}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>Details</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Button style={styles.button} icon rounded
                        onPress = {() => {
                            this.handleAddSamplePress()
                        }}>
                    <Icon name='checkmark' />
                </Button>
            </Container>

        );
    }
};


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
    button:{
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#266bf7',
        borderColor: '#515356',
        borderWidth: 0,
        margin: 5,
        position: 'absolute',
        bottom:5,
        right:5,
    },
    buttonText: {
        color: '#515356',
        fontWeight: 'bold',
        textAlign: 'center',
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


export default SampleAddPage
