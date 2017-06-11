import React, { Component } from 'react';
import { Content, List, ListItem, Text, Body, Thumbnail, Card } from 'native-base';
import { View, TouchableOpacity } from 'react-native';

const activity = require('../../../img/leader-speech.png');

export default class MyActivities extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '创建活动',
  };
  render() { // eslint-disable-line
    return (
      <Content padder>
        <List>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem >
              <TouchableOpacity>
                <Thumbnail square size={80} source={activity} />
              </TouchableOpacity>
              <Body>
                <Text>活动</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
        </List>
      </Content>
    );
  }
}
