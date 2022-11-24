import React from "react";
import {GiftedChat, Send} from "react-native-gifted-chat";
import {Image, Text, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {user, detective} from "./MessageGenerator";
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

const filterBotMessages = message =>
    !message.system && message.user && message.user._id && message.user._id === 2
const findStep = step => message => message._id === step

export const MessageScreen = ({ props, navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Details');
    };

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
            <SafeAreaView style={{ flex: 1 }}>
                <TopNavigation title='MyApp' alignment='center'/>
                <Divider/>
                <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <GiftedChat
                        messages={props.messages}
                        onSend={messages => {props.addMessage(messages); (props.userSentMessage(messages))}}
                        user={{
                            _id: 1
                        }}
                        onQuickReply={onQuickReply}
                        renderQuickReplySend={renderQuickReplySend}
                        renderSend={renderSend}
                    />
                </Layout>
            </SafeAreaView>
        );

}

export default MessageScreen