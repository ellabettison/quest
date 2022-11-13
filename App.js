import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {parse} from './MessageParser'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from './MessageScreen'





const Tab = createBottomTabNavigator();

class App extends Component {
  
  render() {
    return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                      iconName = focused
                          ? 'chatbubbles'
                          : 'chatbubbles-outline';
                  } else if (route.name === 'Settings') {
                      iconName = focused ? 'search' : 'search-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="Home" component={MessageScreen} />
            <Tab.Screen name="Settings" component={EvidenceScreen} />
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

export default App;