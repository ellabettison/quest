import React, {useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from './MessageScreen'
import {EvidenceScreen} from "./EvidenceScreen";
import {doNextStory, checkIfCanProceed} from "./StoryGenerator";
import {GiftedChat} from "react-native-gifted-chat";
import {createMessage, user} from "./MessageGenerator";
import story from "./story.json";

const Tab = createBottomTabNavigator();

const App = () => {

    let story = require('./story.json');

    const [evidenceScreenUnseenMessages, setEvidenceScreenUnseenMessages] = useState(0);
    const [messageScreenUnseenMessages, setMessageScreenUnseenMessages] = useState(0);

    const [items, setItems] = useState([]);
    const [messages, setMessages] = useState([]);
    const [storyLoc, setStoryLoc] = useState(1);
    
    const messageRef = useRef();
    const evidenceRef = useRef();
    const storyRef = useRef();
    
    function userSentMessage(message){
        console.log(message[0]["text"] + storyLoc)
        console.log(checkIfCanProceed(storyLoc-1, story, message["text"]));
        if (checkIfCanProceed(storyLoc-1, story, message[0]["text"])) {
            setStoryLoc(storyLoc=> storyLoc+1)
            doNextStory(storyLoc, story, addMessage, addEvidence);
        } else{
            addMessage(createMessage("I don't think that's the right answer"))
        }
    }
    
    function addEvidence(item){
        items.push(item)
        // this.props.updateMessages(items.length)
    }
    
    function addMessage(message) {
        setMessages(
            previousMessages => GiftedChat.append(previousMessages, message)
        );
    }
    
    return (
        
        <NavigationContainer>
            {/*<StoryGenerator ref={storyRef} addMessage={addMessage} addEvidence={addEvidence}/>*/}
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
            <Tab.Screen name="Messages" children={()=><MessageScreen ref={messageRef} 
                                                                     messages={messages} 
                                                                     userSentMessage={userSentMessage} 
                                                                     addMessage={addMessage} 
                                                                     updateMessages={setMessageScreenUnseenMessages} 
                                                                     triggerNext={userSentMessage}/>} 
                        options={{ tabBarBadge: messages.length }}/>
            <Tab.Screen name="Evidence" children={()=><EvidenceScreen ref={evidenceRef} 
                                                                      items={items} 
                                                                      updateMessages={setEvidenceScreenUnseenMessages}/>} 
                        options={{ tabBarBadge: items.length }}/>
          </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;