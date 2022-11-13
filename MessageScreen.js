import React, {Component} from "react";
import {GiftedChat, Send} from "react-native-gifted-chat";
import {parse} from "./MessageParser";
import {Text, View} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {createMessage, createMultichoiceMessage} from "./MessageGenerator";
import {user, detective} from "./MessageGenerator";

const filterBotMessages = message =>
    !message.system && message.user && message.user._id && message.user._id === 2
const findStep = step => message => message._id === step

class MessageScreen extends Component {

    state = {
        messages: [
            createMultichoiceMessage(text="Hi", choices=[
                {
                    title:"Hi",
                    value:"greet"
                },
                {
                    title:"Hello",
                    value:"greet2"
                }
            ]),
            createMessage("Hello there, I am a detective"),
        ],
        unseenMessages:0
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
        console.log(this.state.messages.length);
        this.props.updateMessages(this.state.messages.length);
    }

    onQuickReply = replies => {
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

    renderQuickReplySend = () => <Text>{' custom send =>'}</Text>

    renderSend = (props) => (
        <Send {...props} containerStyle={{ justifyContent: 'center' }}>
            <MaterialIcons size={30} color={'tomato'} name={'send'} />
        </Send>
    )

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1
                    }}
                    onQuickReply={this.onQuickReply}
                    renderQuickReplySend={this.renderQuickReplySend}
                    renderSend={this.renderSend}
                />
            </View>
        );
    }

}

export default MessageScreen