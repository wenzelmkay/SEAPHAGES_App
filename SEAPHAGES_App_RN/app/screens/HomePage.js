//importing different pages
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

//React native is component-based. Meaning an app is just a tree of components, starting with a root component
class HomePage extends Component {
    render () {
        return (
            <View style = {{padding: 50, paddingTop: 200}}>

                <Image
                    style={{height: 50, padding: 30,}}
                    source={{uri: 'https://seaphages.org/static/images/SEAPHAGES_Logo.png'}}
                />

                <Text style = {{fontSize: 20, paddingTop: 40, color: '#515356', textAlign: 'center'}}>
                    A mobile tool for in-the-field collection of soil sample data.
                </Text>

            </View>
        );
    }
}

export default HomePage