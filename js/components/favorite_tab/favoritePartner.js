import React, { Component } from 'react';
import { List, ListItem, Body, Text, Thumbnail, Card } from 'native-base';
import { TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './styles'

const Hao = require('../../../img/home/Hao.png');

export default class FavoritePartner extends Component { // eslint-disable-line
  static navigationOptions = {
    tabBarLabel: '合伙人',
  };
  getDetails = () => {
    this.props.screenProps.rootNavigation.navigate('FavoritePartnerDetail', {});
  };

  render() { // eslint-disable-line
    return (
      <ScrollView padder>
        <List>
          <Card>
            <ListItem onPress={() => this.getDetails()}>
              <TouchableOpacity>
                <Thumbnail square size={80} source={Hao} />
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
                <Thumbnail square size={80} source={Hao} />
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
              <Thumbnail square size={80} source={Hao} />
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
                <Thumbnail square size={80} source={Hao} />
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
                <Thumbnail square size={80} source={Hao} />
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
                <Thumbnail square size={80} source={Hao} />
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
                <Thumbnail square size={80} source={Hao} />
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
