import React, {Component, forwardRef, useImperativeHandle, useState} from "react";
import {GiftedChat, Send} from "react-native-gifted-chat";
import {parse} from "./MessageParser";
import {Image, Text, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {createMessage, createMultichoiceMessage} from "./MessageGenerator";
import {user, detective} from "./MessageGenerator";

const filterBotMessages = message =>
    !message.system && message.user && message.user._id && message.user._id === 2
const findStep = step => message => message._id === step

export const MessageScreen = forwardRef((props, ref) => {
    
    // const [messages, setMessages] = useState([]);
    

    // function onSend(new_mess = []) {
    //     setMessages(
    //         GiftedChat.append(this.props.messages, new_mess)
    //     );
    //     props.triggerNext()
    //     // parse(messages, onReceive.bind(this));
    //
    // }
    //
    // function onReceive(message) {
    //     console.log("received message!!" + message);
    //     GiftedChat.append(messages, message)
    //     console.log(messages.length);
    //     this.props.updateMessages(messages.length);
    // }
    //
    // useImperativeHandle(ref, () => ({
    //     onReceive(message) {
    //         console.log("received message!!" + message);
    //         GiftedChat.append(messages, message)
    //         // this.setState(previousState => ({
    //         //     messages: GiftedChat.append(previousState.messages, message)
    //         // }));
    //         console.log(messages.length);
    //         // this.props.updateMessages(messages.length);
    //     }
    // }))

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
            <View style={{flex: 1, backgroundColor: '#fff'}}>
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
            </View>
        );

})

export default MessageScreen