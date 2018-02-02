/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem, Right, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from '../config/styles';
import Meteor, { createContainer } from 'react-native-meteor';
import moment from 'moment';



const backAction = NavigationActions.back({key: null});

class UserAccount extends Component {

    handleSignOutPress = () => {
        Meteor.logout(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    //NavigationActions.navigate({ routeName: 'SignInStack' }),
                ],
            });
            this.props.navigation.dispatch({ type: 'Navigation/BACK' })

            //this.props.navigation.dispatch(resetAction);
        });
    };
    handlePrivacyPolicyPress = () => {
        this.props.navigation.navigate('privacyPolicyCall');
    };
    handleSampleEditPress = (sampleDetails) => {
        this.props.navigation.navigate('sampleEditCall', {sampleDetails} );
        console.log("button pressed")
    };

    renderSamples = () => {
        if (this.props.samples.length === 0) {
            return (
            <CardItem>
                <Body>
                    <Text style = {styles.cardPrimaryText}>You have not collected any samples yet.</Text>
                </Body>
            </CardItem>
            );
        }
        return this.props.samples.map((item) => (
            <CardItem
                key={item._id}>
                <Body>
                    <Text style = {styles.cardPrimaryText}>{item.title}</Text>
                    <Text style = {styles.cardSecondaryText}>{moment(item.date).format("MMM Do YYYY, h:mm a")}</Text>
                </Body>
                <Right>
                    <Button
                            onPress={() => this.handleSampleEditPress( item )}>
                        <Text>Edit me!</Text>
                    </Button>
                </Right>
            </CardItem>
        ));
    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Profile</Title>
                    </Body>
                </Header>
                <Content style = {styles.contentStyle}>
                    <Card>
                        <CardItem header>
                            <Text>User Information</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>Username: {this.props.user.username}</Text>
                                <Text>Email: {this.props.user.emails[0].address}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Samples</Text>
                        </CardItem>
                        {this.renderSamples()}
                    </Card>


                </Content>
                <Button
                    transparent
                    onPress={() =>  this.handlePrivacyPolicyPress()}>
                    <Text style={styles.cardPrimaryText}>Privacy Policy</Text>
                </Button>
                <Button block
                        style={styles.buttonBlock}
                        onPress={this.handleSignOutPress}>
                    <Text>Sign Out</Text>
                </Button>
            </Container>



        );
    }
}


export default createContainer(() => {
    Meteor.subscribe('samples');
    return {
        user: Meteor.user(),
        samples: Meteor.collection('samples').find({"owner" : Meteor.user()._id}),
    };
}, UserAccount);

//export default UserAccountPage;
