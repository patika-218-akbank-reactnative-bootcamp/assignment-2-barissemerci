/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

 import React from 'react';
 import {StyleSheet, View,Text,Image} from 'react-native';



 const MessageCard = (props) => {



    return(
        <View style={styles.container}>
            <Image style={styles.profileImage} source={{uri: 'https://picsum.photos/100/100'}} />
            <View style={styles.nameAndMessage}>
            <Text style={styles.name}>{props.message.receiver.firstName} {props.message.receiver.lastName }</Text>
            <Text style={styles.message}>{props.message.messages[props.message.messages.length-1].text}</Text>
            </View>
            <View style={styles.date}>
                <Text style={styles.dateText}>23.08</Text>               
                 <Text></Text>

            </View>


        </View>



    );




   
         
 };

   


 

    

 
 const styles = StyleSheet.create({
  container:{
    height:80,
    flexDirection:'row',
    padding:10,
    margin:10,
    alignItems:'center'
 
  },
  nameAndMessage:{
    flexDirection:'column',
    marginLeft:15,
    justifyContent:'center',

  }, 
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name:{
    fontSize:18,
    fontWeight:'bold'
  },
  date:{
    position:'absolute',
    right:10

  },
  dateText:{
    fontWeight:'bold'
  },
  message:{
    fontSize:16,

  }

 });
 
 export default MessageCard;
 