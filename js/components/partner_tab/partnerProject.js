import React, { Component } from 'react';
import { Card, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';

const proimg = require('../../../img/web-cover1.jpg');

export default class PartnerProject extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合作项目',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('ProjectDetail', {});
  };
  render() { // eslint-disable-line
    return (
      <ScrollView padder>
        <List>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={proimg} />
              </TouchableOpacity>
              <Body>
                <Text>姓名</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </Card>
        </List>
      </ScrollView>
    );
  }
}
