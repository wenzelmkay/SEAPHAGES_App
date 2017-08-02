/**
 * Created by wenzelmk on 7/17/17.
 */

import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Text } from 'native-base';
import styles from '../config/styles';
import { AppRegistry } from 'react-native';
import { StackNavigator, NavigationActions} from 'react-navigation';
import CreateAccountPage from '../screens/CreateAccountPage';


class SignInPage extends React.Component {
    static navigationOptions = {
        title: 'Sign In Page',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>
                <Header style = {styles.header}>
                    <Body>
                    <Title style = {styles.headerTitle}>Sign In</Title>
                    </Body>
                </Header >
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
                    <Button block
                            style= {styles.buttonBlock}>
                        <Icon name='ios-key-outline' />
                        <Text>Sign In</Text>
                    </Button>
                    <Button block
                            onPress={() => navigate('CreateAccountPage')}
                            title='Go to Create Account Page'
                            style= {styles.buttonBlock}>
                        <Icon name='ios-person-add-outline' />
                        <Text>Create an Account</Text>
                    </Button>
                </Content>
            </Container>

        );
    }
}


const SignInApp = StackNavigator({
    Main: {screen: SignInPage},
    Secondary: {screen: CreateAccountPage},
});

AppRegistry.registerComponent('SignInApp', () => SignInApp);

/*const navigateAction = NavigationActions.navigate({
    routeName: 'Secondary',
    params: {title: 'Create an Account'},
    action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})
this.props.navigation.dispatch(navigateAction)*/



export default SignInPage;