/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Moment from 'moment';

const MessageCard = ({info, onPress}) => {
  Moment.locale('tr');

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(
          info.userId,
          info.firstName + ' ' + info.lastName,
          info.profilePhoto,
        );
      }}>
      <View style={styles.container}>
        <Image style={styles.profileImage} source={{uri: info.profilePhoto}} />
        <View style={styles.nameAndMessage}>
          <Text style={styles.name}>
            {info.firstName} {info.lastName}
          </Text>
          <Text style={styles.message}>{info.message.text}</Text>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}>
            {Moment(info.message.datetime).format('HH:mm')}
          </Text>
          <Text />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  nameAndMessage: {
    flexDirection: 'column',
    marginLeft: 15,
    justifyContent: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    position: 'absolute',
    right: 10,
  },
  dateText: {
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
  },
});

export default MessageCard;
