/**
 * Created by wenzelmk on 5/16/17.
 */

import React, { Component } from 'react';
import { View, TouchableHighlight, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon } from 'native-base';
import { Button, goBack, NavigationOptions } from 'react-navigation';


class SampleAddPage extends Component {
    //lines establish whether or not the modal window is visible, and write a function to make the modal visible (this is called later on lines 172 & 205

    render() {
        return (
                <Container>
                    <Content>
                        <List>
                            <ListItem>
                                <InputGroup>
                                    <Icon name='pizza' />
                                    <Input placeholder='Sample Name' />
                                </InputGroup>
                            </ListItem>

                            <ListItem>
                                <InputGroup>
                                    <Icon name='ios-navigate' />
                                    <Input inlineLabel label='Sample Latitude' placeholder='Sample Latitude'/>
                                </InputGroup>
                            </ListItem>

                            <ListItem>
                                <InputGroup >
                                    <Icon name='ios-navigate-outline' />
                                    <Input inlineLabel label='Sample Longitude' placeholder='Sample Longitude' />
                                </InputGroup>
                            </ListItem>

                            <ListItem>
                                <InputGroup >
                                    <Input stackedLabel label='Details' placeholder='Details' />
                                </InputGroup>
                            </ListItem>

                        </List>
                    </Content>
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
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#f7c05b',
        borderColor: '#515356',
        borderWidth: 2,
        margin: 50,
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