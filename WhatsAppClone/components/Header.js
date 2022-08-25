/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import IconSearch from 'react-native-vector-icons/Fontisto';
import IconThreeDots from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.backContainer}>
      <View style={styles.container}>
        <Text style={styles.whatsAppTextStyle}>WhatsApp</Text>
        <View style={styles.icons}>
          <IconSearch style={styles.icon} size={25} name="search" />
          <IconThreeDots
            style={styles.icon}
            size={25}
            name="dots-three-vertical"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    backgroundColor: '#008069',
  },
  container: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    flexDirection: 'row',
  },
  whatsAppTextStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
  icons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  icon: {
    color: 'white',
    marginLeft: 20,
  },
});

export default Header;
