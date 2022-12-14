/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import IconBack from 'react-native-vector-icons/MaterialIcons';
import IconCamera from 'react-native-vector-icons/Ionicons';
import IconPhone from 'react-native-vector-icons/FontAwesome';
import IconThreeDots from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const ChatPageHeader = ({userName, profilePhoto}) => {
  const navigation = useNavigation();

  function navigateHomePage() {
    navigation.navigate('HomePage');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateHomePage}>
        <IconBack style={styles.icon} size={30} name="arrow-back" />
      </TouchableOpacity>
      <View style={styles.imageAndName}>
        <Image style={styles.profileImage} source={{uri: profilePhoto}} />
        <Text style={styles.nameText}>{userName}</Text>
      </View>
      <View style={styles.icons}>
        <IconCamera style={styles.iconRight} size={27} name="videocam" />
        <IconPhone style={styles.iconRight} size={27} name="phone" />
        <IconThreeDots
          style={styles.iconRight}
          size={27}
          name="dots-three-vertical"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008069',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 5,
  },
  icon: {
    color: 'white',
  },
  imageAndName: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
    color: 'white',
  },
  icons: {
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  iconRight: {
    color: 'white',
    marginLeft: 20,
  },
});

export default ChatPageHeader;
