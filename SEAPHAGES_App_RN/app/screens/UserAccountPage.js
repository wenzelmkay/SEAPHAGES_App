/**
 * Created by wenzelmk on 7/17/17.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

class UserAccountPage extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Testing 123!</Title>
                    </Body>
                </Header>
                <Content>
                    <Grid>
                        <Row style={{ height: 500 }}>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                <Button icon rounded>
                                    <Icon name='ios-person-add-outline' />
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>



        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default UserAccountPage;