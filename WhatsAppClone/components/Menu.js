
import {Text,View,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import IconCamera from 'react-native-vector-icons/MaterialIcons'
import React, { useState, useEffect } from 'react';


const Menu = () =>{
    const [selectedTab, setselectedTab] = useState('SOHBETLER');
    const [tabs, setTabs] = useState(['KAMERA','SOHBETLER','DURUM','ARAMALAR']);

    return (
        <View style={styles.container}>

           

{
    tabs.map((item,index)=> {

        if (item==='KAMERA') {
            return  <TouchableOpacity key={item} onPress={() => {
                setselectedTab(item);
              }}>
            <View style={styles.cameraMenuStyle}>
            <IconCamera style={item == selectedTab ? styles.iconSelected: styles.icon} size={25} name="photo-camera"></IconCamera>
            </View>
            <View style={item == selectedTab ? styles.cameraSelectedLine : {}}></View>

        </TouchableOpacity>;
          }
          else{
            return (
                    <TouchableOpacity key={item} onPress={() => {
                setselectedTab(item);
              }} style={styles.touchableOpacity}>
            <View style={styles.menuItemsStyle}>
                <Text style={item == selectedTab ? styles.textSelected : styles.text}>
                    {item}
                </Text>
              </View>  
              <View style={item == selectedTab ? styles.line : {}}></View>
            </TouchableOpacity>
            )
          }




        
    }
    
    )
}
         
      
       

        
        

       
          </View>
         
        
    );
};


const styles = StyleSheet.create({
   container:{
    flexDirection:'row',   
    paddingLeft:5, 
    backgroundColor:'#008069',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:5

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
   
   touchableOpacity:{
    flex:1,

   },
   icon:{
    color:'#aad5ce',
   },
   line:{
    alignSelf:'center',
    height:2,
   width:100,
    backgroundColor:'white',
    
   },
   textSelected:{
    color:'white',
    fontWeight:'800',
    fontSize:16,
   },
   iconSelected:{
    color:'white',
   },
   cameraSelectedLine:{
    height:2,backgroundColor:'white'
   },
   cameraMenuStyle:{
    justifyContent:'center',
    alignItems:'center'
   }

  });


export default Menu;