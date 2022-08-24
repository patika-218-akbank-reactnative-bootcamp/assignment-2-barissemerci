/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';
import Menu from './Menu';
import IconMessage from 'react-native-vector-icons/MaterialCommunityIcons'
import Messages from './Messages';

 
 const HomePage = () => {
   return (
    <View style={styles.container}>
       <Header></Header>
       <Menu></Menu>
        <View style={styles.button}>
          <IconMessage style={styles.icon} size={35} name="android-messages"/>
        </View>
        <Messages />
    </View>
   );
 };
 
 const styles = StyleSheet.create({
 container:{
   flex:1

},


  icon:{
    color: 'white',

   },
   button:{
    transform: [{ rotateY: '180deg'}],
   
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:'#008069',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:20,
    right:20
   
   
   }
 });
 
 export default HomePage;
 