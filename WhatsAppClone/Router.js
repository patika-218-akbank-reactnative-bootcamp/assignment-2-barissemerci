import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import ChatPage from './components/ChatPage';

const Stack=createNativeStackNavigator();

function  App(){
    return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                headerShown: false,
                }}>
                    <Stack.Screen name="HomePage" component={HomePage}   />
                    <Stack.Screen name="ChatPage" component={ChatPage}   />
                </Stack.Navigator>
            </NavigationContainer>
    );
}

export default App;