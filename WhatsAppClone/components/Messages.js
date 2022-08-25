/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import {FlatList} from 'react-native';
import MessageCard from './MessageCard';
import React from 'react';

const Messages = ({info, onPress}) => {
  const renderMessageCard = ({item}) => (
    <MessageCard onPress={onPress} info={item} />
  );
  return (
    <FlatList
      data={info}
      renderItem={renderMessageCard}
      keyExtractor={item => item.key}
    />
  );
};

export default Messages;
