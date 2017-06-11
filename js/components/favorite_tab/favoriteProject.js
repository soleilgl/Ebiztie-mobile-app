import React, { Component } from 'react';
import { Card, List, ListItem, Text, Body, Thumbnail } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';

const winnerimg = require('../../../img/home/Winner.png');

export default class FavoriteProject extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合作项目',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('FavoriteProjectDetail', {});
  };
  render() { // eslint-disable-line
    return (
      <ScrollView padder>
        <List>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
                <Thumbnail square size={80} source={winnerimg} />
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
