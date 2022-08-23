/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
 
 const App = () => {
   return (
    <ScrollView>
        <Header />
        <Menu />
    </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default App;
 