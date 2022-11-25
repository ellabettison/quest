import React, {useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {doNextStory, checkIfCanProceed} from "./StoryGenerator";
import {GiftedChat} from "react-native-gifted-chat";
import {createMessage, user} from "./MessageGenerator";
import story from "./story.json";
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, TopNavigation} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { TabNavigator } from './navigation.component';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView} from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const App = () => {

    let story = require('./story.json');

    const [items, setItems] = useState([]);
    const [messages, setMessages] = useState([]);
    const [storyLoc, setStoryLoc] = useState(1);
    
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
        <SafeAreaView style={{ flex: 1 }}>
            <ApplicationProvider {...eva} theme={eva.light}>
            <TopNavigation title='MyApp' alignment='center'/>
        <NavigationContainer>
            
                <TabNavigator
                    items={items} 
                              addMessage={addMessage} 
                              addEvidence={addEvidence} 
                              userSentMessage={userSentMessage} 
                              messages={messages}
                />
            
            </NavigationContainer>
            </ApplicationProvider>
        </SafeAreaView>
    )
}

export default App;