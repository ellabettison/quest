import React, {useState} from "react";
import {GiftedChat, Send} from "react-native-gifted-chat";
import {Image, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {user, detective} from "./MessageGenerator";
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';

const filterBotMessages = message =>
    !message.system && message.user && message.user._id && message.user._id === 2
const findStep = step => message => message._id === step

export const MessageScreen = ({ messages, addMessage, userSentMessage }) => {
    

    function onQuickReply(replies) {
        const createdAt = new Date()
        if (replies.length === 1) {
            this.onSend([
                {
                    createdAt,
                    _id: Math.round(Math.random() * 1000000),
                    text: replies[0].title,
                    user,
                },
            ])
        } else if (replies.length > 1) {
            this.onSend([
                {
                    createdAt,
                    _id: Math.round(Math.random() * 1000000),
                    text: replies.map(reply => reply.title).join(', '),
                    user,
                },
            ])
        } else {
            console.warn('replies param is not set correctly')
        }
    }

    function renderQuickReplySend() {return <Text>{' custom send =>'}</Text>}

    function renderSend (props)
    {
        return <Send {...props} containerStyle={{justifyContent: 'center'}}>
            <MaterialIcons size={30} color={'tomato'} name={'send'}/>
        </Send>
    }
    
        return (
                <Layout style={{ flex: 1}}>
                    <GiftedChat
                        
                        onSend={messages => {addMessage(messages); (userSentMessage(messages))}}
                        user={{
                            _id: 1
                        }}
                        messages={messages}
                        onQuickReply={onQuickReply}
                        renderQuickReplySend={renderQuickReplySend}
                        renderSend={renderSend}
                    />
                </Layout>
        );

}

export default MessageScreen