/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import IconSmiley from 'react-native-vector-icons/Fontisto';
import IconCamera from 'react-native-vector-icons/MaterialIcons';
import IconAttach from 'react-native-vector-icons/Entypo';
import IconMicrophone from 'react-native-vector-icons/MaterialCommunityIcons';

const InputView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <IconSmiley style={styles.icon} size={27} name="smiley" />
        <TextInput
          multiline={true}
          placeholder="Mesaj"
          style={styles.textInput}
        />
        <View style={styles.icons}>
          <IconAttach style={styles.iconAttach} size={30} name="attachment" />
          <IconCamera size={30} name="photo-camera" />
        </View>
      </View>

      <View style={styles.microphoneButton}>
        <IconMicrophone
          style={styles.microphoneIcon}
          size={30}
          name="microphone"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '97%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
    flexDirection: 'row',
  },
  inputContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  icon: {
    marginRight: 5,
    marginLeft: 10,
  },
  iconAttach: {
    transform: [{scaleY: 1}, {rotateY: '180deg'}],
    marginRight: 15,
  },
  icons: {
    flexDirection: 'row',
    marginRight: 15,
  },
  microphoneButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#008069',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  microphoneIcon: {
    color: 'white',
  },
});

export default InputView;
