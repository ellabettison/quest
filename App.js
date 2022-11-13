import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {parse} from './MessageParser'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from './MessageScreen'
import EvidenceScreen from "./EvidenceScreen";

const Tab = createBottomTabNavigator();

class App extends Component {
    
    state={
        evidenceScreenUnseenMessages:null,
        messageScreenUnseenMessages:null
    };
    
    updateEvidenceScreenUnseenMessages(newNum){
        this.setState(previousState => ({
            evidenceScreenUnseenMessages: newNum
        }));
    };

    updateMessageScreenUnseenMessages(newNum){
        this.setState(previousState => ({
            messageScreenUnseenMessages: newNum
        }));
    };
  
  render() {
    return (
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Messages') {
                      iconName = focused
                          ? 'chatbubbles'
                          : 'chatbubbles-outline';
                  } else if (route.name === 'Evidence') {
                      iconName = focused ? 'search' : 'search-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="Messages" children={()=><MessageScreen updateMessages={this.updateMessageScreenUnseenMessages.bind(this)}/>} options={{ tabBarBadge: this.state.messageScreenUnseenMessages }}/>
            <Tab.Screen name="Evidence" children={()=><EvidenceScreen updateMessages={this.updateEvidenceScreenUnseenMessages.bind(this)}/>} options={{ tabBarBadge: this.state.evidenceScreenUnseenMessages }}/>
          </Tab.Navigator>
        </NavigationContainer>
    );
  }
}

export default App;