import React, { Component } from 'react';
import { List, ListItem, Text, Body, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';

const bizimg = require('../../../img/discoverlogo.jpg');

export default class PartnerBusiness extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '商务合作',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('BusinessDetail', {});
  };
  render() { // eslint-disable-line
    return (
      <ScrollView padder>
        <Card>
        <List>
          {/* <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card>
          <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card> */}
          {/* <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card>
          <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card>
          <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card>
          <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card>
          <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card>
          <Card> */}
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={bizimg} />
              </TouchableOpacity>
              <Body>
                <Text>公司名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          {/* </Card> */}
        </List>
      </Card>
      </ScrollView>
    );
  }
}
