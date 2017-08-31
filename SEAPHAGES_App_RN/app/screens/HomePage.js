//importing different pages
import React, {Component} from 'react';
import { View, Image, TouchableHighlight} from 'react-native';
import { Button, Header, Title, Body, Content, Card, CardItem, Container, Icon, Right, Text } from 'native-base';
import styles from '../config/styles';
import colors from '../config/colors';

class HomePage extends Component {
    handleAcknowledgementPress = () => {
        this.props.navigation.navigate('acknowledgementCall');
    };
    handlePrivacyPolicyPress = () => {
        this.props.navigation.navigate('privacyPolicyCall');
    };
    render () {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Home</Title>
                    </Body>
                </Header>
                <Content style = {styles.contentStyle}>
                    <Image
                        style={{height: 120, paddingTop: 40,}}
                        source={{uri: 'https://seaphages.org/static/images/logos/SEAPHAGES_Logo_270x80.png'}}
                    />

                    <Text style = {{fontSize: 20, paddingTop: 40, paddingBottom: 40, color: colors.textDark, textAlign: 'center'}}>
                        A mobile tool for in-the-field collection of soil sample data.
                    </Text>
                    <Card>
                        <CardItem>
                            <Button
                                transparent
                                onPress={() =>  this.handleAcknowledgementPress()}>
                                <Text style={styles.cardSecondaryText}>Meet the Team that made the App</Text>
                            </Button>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Button
                                transparent
                                onPress={() =>  this.handlePrivacyPolicyPress()}>
                                <Text style={styles.cardSecondaryText}>Read our Privacy Policy</Text>
                            </Button>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>

            </Container>
        );
    }
}

export default HomePage