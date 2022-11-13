import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {parse} from './MessageParser'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


class MessageScreen extends Component {

  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'FAQ Bot',
          avatar: 'https://i.imgur.com/7k12EPD.png'
        }
      }
    ]
  };
  
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
    parse(messages, this.onReceive.bind(this));

  }

  onReceive(message){
    console.log("received message!!"+message);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message)
    }));
  }
  
  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1
              }}
          />
        </View>
    );
  }

}

function EvidenceScreen() {
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
  );
}

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