import React from 'react';
import { DrawerItems } from 'react-navigation';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <DrawerItems {...props} />
  </View>
);

export default CustomDrawerContentComponent
