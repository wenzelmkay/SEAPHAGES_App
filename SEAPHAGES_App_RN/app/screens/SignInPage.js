/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, Text } from 'native-base';
import styles from '../config/styles';



class SignInPage extends Component {
    handleCreateAccountPress = () => {
        this.props.navigation.navigate('createAccountPageCall');
    };

    render() {
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Sign In</Title>
                    </Body>
                </Header >
                <Content>
                    <Card
                        style={styles.cardStyle}>
                        <Content>
                            <Form>
                                <Item floatingLabel>
                                    <Label>Username</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Password</Label>
                                    <Input />
                                </Item>
                            </Form>
                        </Content>
                        <Button
                            icon
                            block
                            style = {styles.buttonBlock}>
                            <Icon name='ios-key-outline' />
                            <Text>Sign In</Text>
                        </Button>
                        <Button
                            icon
                            block
                            bordered
                            style = {styles.buttonBordered}
                            onPress={() =>  this.handleCreateAccountPress() + console.log('PRESSED')}>
                            <Icon style = {styles.buttonBorderedText} name='ios-person-add-outline' />
                            <Text style = {styles.buttonBorderedText}>Create an Account</Text>
                        </Button>
                    </Card>
                </Content>
            </Container>

        );
    }
}




export default SignInPage;