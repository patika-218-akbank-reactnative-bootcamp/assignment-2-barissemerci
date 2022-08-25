/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ChatPageHeader from './ChatPageHeader';
import ChatView from './ChatView';
import InputView from './InputView';

const ChatPage = props => {
  return (
    <View style={styles.container}>
      <ChatPageHeader
        userId={props.route.params.userId}
        userName={props.route.params.userName}
        profilePhoto={props.route.params.profilePhoto}
      />
      <ChatView conversation={props.route.params.conversation} />
      <InputView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'gray',
  },
});

export default ChatPage;
