/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

 import {StyleSheet,Button, View,Text, ScrollView, FlatList} from 'react-native';
 import { useNavigation } from '@react-navigation/native';
 import MessageCard from './MessageCard';
 import React, { useEffect } from 'react';





 const Messages = ({info}) => {

   const navigation = useNavigation(); 


   const renderMessageCard=({item}) =><MessageCard onPress={navigateChatPage} info={item} />



   function navigateChatPage(id){
    console.log("onpress tetiklendi", id)
      navigation.navigate('ChatPage')
    }



   return(
      <FlatList
      data={info}
      renderItem={renderMessageCard}
      keyExtractor={item => item.key}
    />
      
         );

 };

   


 

    

 
 const styles = StyleSheet.create({
  container:{
 
  }
 });
 
 export default Messages;
 