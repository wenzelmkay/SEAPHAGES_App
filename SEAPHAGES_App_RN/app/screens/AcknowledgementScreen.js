import React, {Component} from 'react';
import { Container, Title, Button, Icon, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import styles from '../config/styles';
import { NavigationActions, } from 'react-navigation';

const backAction = NavigationActions.back({key: null});

class Acknowledgement extends Component {
    render() {
      return (
        <Container>
        <Header style = {styles.header}>
            <Button transparent light
                    onPress={() => this.props.navigation.dispatch(backAction)}>
                <Icon name='arrow-back' />
            </Button>
            <Body>
            <Title style = {styles.headerTitle}>App credits</Title>
            </Body>
        </Header>
        <Content>
            <List>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/foam.jpg')} />
                <Body>
                  <Text>Melissa "Mia" Wenzel</Text>
                  <Text note>Lead Developer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/cup.jpg')} />
                <Body>
                  <Text>Roxana Behrooz</Text>
                  <Text note>Developer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/palette.jpg')} />
                <Body>
                  <Text>Joseph Colman</Text>
                  <Text note>Developer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/dragon.jpg')} />
                <Body>
                  <Text>Kelly Degnon</Text>
                  <Text note>Developer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/cafe.jpg')} />
                <Body>
                  <Text>Kaleigh Jaeger</Text>
                  <Text note>Developer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/heart1.jpg')} />
                <Body>
                  <Text>Brie Lewis</Text>
                  <Text note>Developer</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../static_assets/profile_pics/steve-coffee-patronus.jpg')} />
                <Body>
                  <Text>Steven Cresawn</Text>
                  <Text note>Principal Investigator</Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </Container>
      );
    }
  }

export default Acknowledgement
