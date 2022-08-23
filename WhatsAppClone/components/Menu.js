
import React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import IconCamera from 'react-native-vector-icons/MaterialIcons'

const Menu = () =>{
    return (
        <View style={styles.container}>

         
        <TouchableOpacity>
            <View style={{width:40,height:40,alignItems:'center',justifyContent:'center'}}>
            <IconCamera style={styles.icon} size={25} name="photo-camera"></IconCamera>
            </View>
           
        </TouchableOpacity>
        <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.touchableOpacity}>
        <View style={styles.menuItemsStyle}>
            <Text style={styles.text}>
                SOHBETLER
            </Text>
          </View>  
        </TouchableOpacity> 
        
        <TouchableOpacity style={styles.touchableOpacity}>
        <View style={styles.menuItemsStyle}>
        <Text style={styles.text}>
                DURUM
            </Text>
            </View>
        </TouchableOpacity> 
       
        <TouchableOpacity style={styles.touchableOpacity}> 
        <View style={styles.menuItemsStyle}>
        <Text style={styles.text}>
                ARAMALAR
            </Text>
            </View>
        </TouchableOpacity>
        </View>
          </View>
         
        
    );
};


const styles = StyleSheet.create({
   container:{
    flexDirection:'row',    
    backgroundColor:'#008069',
    justifyContent:'center',
    alignItems:'center'

   },
   text:{
    color:'#aad5ce',
    fontWeight:'800',
    fontSize:16,
   },
   menuItemsStyle:{
    alignItems:'center',
    justifyContent:'center',
    
   },
   menuContainer:{
    flexDirection:'row', 
    flex:3,
   },
   touchableOpacity:{
    flex:1,
   },
   icon:{
    color:'#aad5ce',
   }

  });


export default Menu;