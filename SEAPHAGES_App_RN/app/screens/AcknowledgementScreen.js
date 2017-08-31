import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem } from 'native-base';
import styles from '../config/styles';
import { NavigationActions, } from 'react-navigation';

const backAction = NavigationActions.back({key: null});

class AcknowledgementScreen extends Component {

    render () {
        return (
            <Container>

                <Header style = {styles.header}>
                    <Button transparent light
                            onPress={() => this.props.navigation.dispatch(backAction)}
                            title='Go back to Sign In Page'>
                        <Icon name='arrow-back' />
                    </Button>
                    <Body>
                    <Title style = {styles.headerTitle}>Meet the Team</Title>
                    </Body>
                </Header>
                <Content style = {styles.contentStyle}>
                    <Card>
                        <CardItem>
                            <Text style ={{fontSize: 20,}}>The SEA-PHAGES App is developed by the Cresawn lab in James Madison University's Center for Genome and Metagenome Studies. </Text>
                        </CardItem>
                        <CardItem>
                            <Text style ={{fontSize: 18,}}>The coding team includes: Melissa "Mia" Wenzel, Roxana Behrooz, Joseph Colman, Kelly Degnon, Kaleigh Jaeger, Brie Lewis, and Steven Cresawn.</Text>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}

export default AcknowledgementScreen