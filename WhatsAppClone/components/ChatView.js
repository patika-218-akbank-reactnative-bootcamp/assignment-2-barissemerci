/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-localSS
 */

 import React from 'react';
 import {StyleSheet, View,Text,Image, ScrollView, FlatList} from 'react-native';
 import IconCheck from 'react-native-vector-icons/Ionicons';
 import Moment from 'moment';

 

var conversationCombined={};


 const ChatView = ({conversation}) => {


  Moment.locale('tr');
  var myMesagges = conversation[0].messages.map(function(item,index) {
    return {
      key:index,
     isMyMessage:1,
      messages:item
    };
  });


  console.log(conversation[0].messages.length)
  var yourMessages=conversation[1].messages.map(function(item,index) {
    return {
      key:index+conversation[0].messages.length,
     isMyMessage:0,
      messages:item
    };
  });

conversationCombined=myMesagges.concat(yourMessages)


conversationCombined.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.messages.datetime) - new Date(a.messages.datetime);
}).reverse();

console.log(conversationCombined)



  const renderChats=({item}) => {
   
    if(item.messages.image){
      return(<View style={item.isMyMessage==1 ? styles.myImageBox :styles.imageBox}>
        <Image style={styles.image} source={{uri: item.messages.image}}/>
        <View>
        <Text style={item.isMyMessage==1 ? styles.timeTextImage:styles.timeTextImage}>{Moment(item.messages.datetime).format("HH:mm")}</Text>
        {
          item.isMyMessage==1 &&
          <IconCheck style={styles.iconImage} size={20} name="checkmark-done"/>
        }

        </View>
      </View>) 


    }
    else{
      return (
        <View style={item.isMyMessage==1 ?styles.myMessageBox :styles.messageBox}>
        <Text style={styles.messageText}>{item.messages.text}</Text>
        <Text style={styles.timeText}>{Moment(item.messages.datetime).format("HH:mm")}</Text>
        {
        
          item.isMyMessage===1 &&(
        <IconCheck style={styles.icon} size={20} name="checkmark-done"/>
          )
        }
          </View>
            
         )


    }
 
    }
    

return(
  <View style={styles.container}>
 <FlatList
  data={conversationCombined}
  renderItem={renderChats}
  keyExtractor={item => item.key}
  style={styles.flatList}
/>
  </View>
 
);

   
 };
 
 const styles = StyleSheet.create({
 
  flatList:{
height:'82%'
  },
  messageBox:{
    backgroundColor:'white',
    marginBottom:4,
    alignSelf: 'flex-start',
    padding:5,
    borderRadius:10,
    flexDirection:'row',
    marginLeft:10,
    marginTop:5
  },
  myMessageBox:{ 
  backgroundColor:'#e7ffdb',
  marginBottom:4,
  alignSelf: 'flex-end',
  padding:5,
  borderRadius:10,
  marginTop:5,

  flexDirection:'row',
  marginRight:10
},
  messageText:{
    color:'black',
    fontSize:16,
    
    marginRight:8
  },
  timeText:{
    fontSize:14,
    
    alignSelf:'flex-end'

  },
  icon:{
    alignSelf:'flex-end',
    marginLeft:2
  },
  image:{
    width:200,
    height:300
  },
  myImageBox:{
    backgroundColor:'#e7ffdb',
    marginBottom:4,
    alignSelf: 'flex-end',
    padding:5,
    borderRadius:10,
    marginTop:5,
    marginRight:10
  },
  imageBox:{
    backgroundColor:'white',
    marginBottom:4,
    alignSelf: 'flex-start',
    padding:5,
    borderRadius:10,
    marginTop:5,
    marginLeft:10

  },
  myTimeTextImage:{
  position:'absolute',
  marginTop:-23,
  right:30,
  color:'white'
  },
timeTextImage:{
  position:'absolute',
  marginTop:-23,
  right:10,
  color:'white'
},


  iconImage:{
    position:'absolute',marginTop:-24,
    right:5,  color:'white'
  },
  

 
 });
 
 export default ChatView;
 