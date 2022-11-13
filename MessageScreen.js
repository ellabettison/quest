import React, {Component} from "react";
import {GiftedChat} from "react-native-gifted-chat";
import {parse} from "./MessageParser";
import {View} from "react-native";

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

export default MessageScreen