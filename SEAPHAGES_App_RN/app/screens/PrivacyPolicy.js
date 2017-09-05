/**
 * Created by wenzelmk on 8/30/17.
 */

import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Icon, Card, CardItem } from 'native-base';
import styles from '../config/styles';
import { NavigationActions, } from 'react-navigation';

const backAction = NavigationActions.back({key: null});

class PrivacyPolicy extends Component {

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
                    <Title style = {styles.headerTitle}>Privacy Policy</Title>
                    </Body>
                </Header>
                <Content style = {styles.contentStyle}>
                    <Card>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>Privacy Policy</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontSize: 14}}>Date of last revision: August 30, 2017</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>Our Privacy Policy explains what information we collect, how and why we collect it, how we use that information, and with whom we share that information.
                            </Text></Body>
                        </CardItem>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>Information we collect</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>We collect information in the following ways: {"\n"}{"\n"}
                                Information you give us: {"\n"}
                                Phamerator.org and the SEA-PHAGES App each require you to make an account in order for you to use them. When you do, we’ll ask for information such as an email address and username for your account.{"\n"}{"\n"}
                                Information we get from your use of our services: {"\n"}{"\n"}
                                We also collection information as you use our app and website.{"\n"}{"\n"}
                                Log information: {"\n"}
                                When you use our services, or view our content, we automatically record some information on our servers. This may include details of how you used our service ( i.e. phage genomes you have selected for viewing on a Phamerator map), your internet protocol address, device event information (crashes, system activity, hardware settings, browser type, browser language, the date and time of your request and referral URL, etc.), and cookies that may uniquely identify your browser or your Phamerator Account.{"\n"}{"\n"}
                                Location information:{"\n"}
                                When you use the SEA-PHAGES app, we may collect and process information about your actual location. We use the location services provided by your mobile device's operating system to accomplish this.{"\n"}{"\n"}
                                Local storage: {"\n"}
                                We may collect and store information (including personal information) locally on your device using mechanisms such as browser web storage (including HTML 5) and application data caches. {"\n"}{"\n"}
                                Cookies and similar technologies: {"\n"}
                                We use various technologies to collect and store information when you visit our services, and this may include using cookies or similar technologies to identify your browser or device.{"\n"}{"\n"}
                                Information we collect when you are signed in to Phamerator.org or the SEA-PHAGES app may be associated with your account. When information is associated with your account, we treat it as personal information.
                            </Text></Body>
                        </CardItem>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>How we use information we collect</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones. We also use this information to offer you tailored content, such as notifications when phage genomes that we think will interest you become available.
                                We may use the username or real name you provide for your Phamerator.org profile in conjunction with the SEA-PHAGES app, seaphages.org, or phagesdb.org. Your name and photo may be shown to other users of these services.
                                When you contact us, we keep a record of your communication to help solve any issues you might be facing. We may use your email address to inform you about our services, such as letting you know about upcoming changes or improvements.
                                We use information collected from cookies and other technologies to improve your user experience and the overall quality of our services. We will ask for your consent before using information for a purpose other than those that are set out in this Privacy Policy.
                            </Text></Body>
                        </CardItem>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>Information we share</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>We do not share personal information with companies, organizations and individuals outside of SEA-PHAGES without your consent. We may share non-personally identifiable information publicly. For example, we may share information publicly to show trends about the general use of our services.
                            </Text></Body>
                        </CardItem>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>Information Security</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular, we may encrypt our services using SSL. We also review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
                            </Text></Body>
                        </CardItem>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>When this Privacy Policy applies</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>Our Privacy Policy applies to the SEA-PHAGES mobile app and the Phamerator.org website. {"\n"}{"\n"}Our Privacy Policy does not apply to services offered by other companies or individuals, including other sites linked from our services. Our Privacy Policy does not cover the information practices of other companies and organizations who advertise our services, and who may use cookies, pixel tags and other technologies to serve and offer relevant ads.
                            </Text></Body>
                        </CardItem>

                        <CardItem header>
                            <Text style={{fontSize: 16}}>Changes</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text>Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes).
                            </Text></Body>
                        </CardItem>

                    </Card>
                </Content>
            </Container>
        );
    }
}

export default PrivacyPolicy
