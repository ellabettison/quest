import React, {useRef, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {doNextStory, checkIfCanProceed} from "./StoryGenerator";
import {GiftedChat} from "react-native-gifted-chat";
import {createMessage, user} from "./MessageGenerator";
import story from "./story.json";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';

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
        
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider {...eva} theme={eva.light}>
                <AppNavigator/>
            </ApplicationProvider>
        </>
    )
}

export default App;