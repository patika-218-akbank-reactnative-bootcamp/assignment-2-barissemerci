/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

 import React from 'react';
 import {StyleSheet,Button, View,Text, ScrollView, FlatList} from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import chat_data from 'WhatsAppClone/data/chat-data.json'
 import MessageCard from './MessageCard';




 const Messages = (props) => {

   const navigation = useNavigation(); 


   const renderMessageCard=({item}) =><MessageCard message={item} />



   function navigateChatPage(){
      navigation.navigate('ChatPage')
    }



   return(
      <FlatList
      data={props.messages}
      renderItem={renderMessageCard}
      keyExtractor={item => item.id}
    />
      
         );

 };

   


 

    

 
 const styles = StyleSheet.create({
  container:{
 
  }
 });
 
 export default Messages;
 