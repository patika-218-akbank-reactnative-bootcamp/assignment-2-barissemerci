/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

 import {StyleSheet,Button, View,Text, ScrollView, FlatList} from 'react-native';
 import MessageCard from './MessageCard';
 import React, { useEffect } from 'react';





 const Messages = ({info,onPress}) => {



   const renderMessageCard=({item}) =><MessageCard onPress={onPress} info={item} />






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
 