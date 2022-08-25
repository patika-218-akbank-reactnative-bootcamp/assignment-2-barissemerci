/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import {ScrollView, StyleSheet, View,Button} from 'react-native';
import Header from './Header';
import Menu from './Menu';
import IconMessage from 'react-native-vector-icons/MaterialCommunityIcons'
import Messages from './Messages';
import chat_data from 'WhatsAppClone/data/chat-data.json'
import constants from 'WhatsAppClone/data/constants.json'
import React, { useEffect } from 'react';
var temp;


 
 const HomePage = (props) => {
 

   
    var CONSTANTS = constants.map(function(item) {
      return {
        myId: item.myId
      };
    });

    temp = chat_data.filter(item=> item.senderId.includes(CONSTANTS[0].myId)).map(function(item,index) {
      return {
        key:index,
        userId:item.receiver.id,
        firstName: item.receiver.firstName,
        lastName:item.receiver.lastName,
        message:item.messages[item.messages.length-1],
        profilePhoto:item.receiver.profilePhoto
      };
    });
    console.log(temp)


  
 
  
  function navigateChatPage(){
    props.navigation.navigate('ChatPage')
    
  }

  

  
   return (
    <View style={styles.container}>
       <Header></Header>
       <Menu></Menu>
        <View style={styles.button}>
          <IconMessage style={styles.icon} size={35} name="android-messages"/>
        </View>
        <Messages info={temp} />
          
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
 