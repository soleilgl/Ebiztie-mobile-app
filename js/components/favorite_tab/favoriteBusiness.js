import React, { Component } from 'react';
import { List, ListItem, Text, Body, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';

const Hans = require('../../../img/home/Hans.png');

export default class FavoriteBusiness extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '商务合作',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('FavoriteBusinessDetail', {});
  };
  render() { // eslint-disable-line
    return (
      <ScrollView padder>
        <List>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
                <Thumbnail square size={80} source={Hans} />
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
